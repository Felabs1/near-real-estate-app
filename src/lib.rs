use near_sdk::{borsh::{self, BorshDeserialize, BorshSerialize}};
use near_sdk::{env, near_bindgen, Promise};
use near_sdk::serde::{Deserialize, Serialize};
use std::collections::{HashMap};



pub type AccountId = String;


//once the user has logged in with his near credentials, 
// he is able to update his account details
#[derive(Clone, Serialize, Deserialize, BorshDeserialize, BorshSerialize, Debug)]
#[serde(crate = "near_sdk::serde")]
pub struct User {
    id: u32,
    name: String,
    username: AccountId,
    usertype: String,
    contact: String,
}

impl User {
    // we initialize the fields we shall use when adding a new user
    pub fn new(id: u32, name: String, usertype: String, contact: String) -> Self {
        User {
            id,
            name,
            username: env::signer_account_id().to_string(),
            usertype,
            contact,
        }
    }
}

// Properties
#[derive(Clone, Serialize, Deserialize, BorshDeserialize, BorshSerialize, Debug)]
#[serde(crate = "near_sdk::serde")]
pub struct Property {
    id: u32,
    property_name: String,
    price: u128,
    location: String,
    owner: AccountId,
    status: String,
    description: String,
}


impl Property {
    // initialization to be called inside the function dealing with the addition of properties
    pub fn new(id: u32, property_name: String, price: u128, location: String, status: String, description: String) -> Self{
        Property {
            id,
            property_name,
            price,
            location,
            owner: env::signer_account_id().to_string(),
            status,
            description,
        }
    }
}



#[near_bindgen]
#[derive(Clone, Default, BorshDeserialize, BorshSerialize, Debug)]

pub struct Contract {
    account_owner: AccountId,
    // users collection
    users: HashMap<String, User>,

    // user properties collection
    user_properties: Vec<Property>
}

#[near_bindgen]
impl Contract {
    #[init]
    pub fn new(account_owner: AccountId) -> Self {
        let users: HashMap<String, User> = HashMap::new();
        let user_properties: Vec<Property> = Vec::new();

        Contract {
            account_owner,
            users, 
            user_properties
        }
    }


    // works only if the user is logged in
    // allows the users to fill in their data
    pub fn reg_user(&mut self, name: String, usertype: String, contact: String){
        // identification taking the current length of the hashmap and making sure it's an unsigned integer
        let id = self.users.len() as u32;
        // getting the account id of the currently signed in user
        let username = env::signer_account_id().to_string();
        // making sure you don't register twice. though no new data could be added again coz in our logic, 
        // trying to insert a hashmap with a key that allready exists only edit's the data.
        // anyway i thought it would bring a nicer experience doing it like this
        match self.users.get(&username){
            Some(_) => {
                env::log_str("you can't register your data twice")
            }
            None => {
                self.users.insert(username ,User::new(id, name, usertype, contact));
                env::log_str("your data has been registered successfully");

            }
        }

    }

    // addition of a new property
    // I decided to include the image... storing a fake directory in the url for now.
    // when the customer views the properties
    pub fn new_property(&mut self, property_name: String, price: u128, location: String, description: String){
        let id = self.user_properties.len() as u32;
        let status = "available".to_string();
        // adding into the user properties collection
        self.user_properties.push(Property::new(id, property_name, price, location, status, description));
        env::log_str("Property Added successfully");
    }

    // counting the number of overall properties added
    pub fn count_properties(&mut self) -> usize{
        self.user_properties.len()
    }

    pub fn edit_account(&mut self, name: String, usertype: String, contact: String){
        // inserting a value to the hashmap with the same key automatically edits the value of the hashmap. 
        // we will use this to implement the editing of user details
        // your near account acts as the key hence its the onnly yhing that cant be changed
        let username = env::signer_account_id().to_string();
        // we want to make sure that the user id gets retained.
        match self.users.get(&username){
            // we access the key using the match function and wrap our value inside Some
            Some(value) => {
                // i think we now have access to the data we need to manipulate
                let id = value.id;
                // inserting the same key in a hashmap edits it.
                if username == env::signer_account_id().to_string() {
                    self.users.insert(username, User::new(id, name, usertype, contact));
                    env::log_str("Your Data has been edited successfully");
                }else{
                    env::log_str("you need to be logged in to this account");
                }

            },
            None => {
                // this means that when the user logged in, he didn't update his account details.
                // in this case when we try to get it returns None
                env::log_str("you cant edit null data");
            }
        }
    }

    // viewing my account details
    pub fn view_account(&self) -> Option<&User>{
        let username = env::signer_account_id().to_string();
        match &self.users.get(&username) {
            Some(value) => return Some(value),
            None => return None,
        }
    }

    // listing all the stored properties
    pub fn list_properties(&self) -> Vec<Property> {
        let properties = &self.user_properties;
        properties.to_vec()
    }

    // list owners properties
    pub fn my_properties(&self) -> Vec<&Property>{
        let properties = &self.user_properties;
        let owner = env::signer_account_id().to_string();
        let mut filtered_properties = Vec::new();
        properties.into_iter().for_each(|property| {
            if property.owner == owner {
                filtered_properties.push(property);
            }
        });

        if filtered_properties.len() > 0 {
            return filtered_properties.to_vec();
        }else{
            return vec![];
        }
    }


    // the prices of the listed properties will be converted to near. 
    // the buyer will have to send some near tokens to buy a property after which the status will change to occupied,
    // the property owner will receive the money
    pub fn buy_property(&mut self, id: u32){
        let a_near: u128 = 1_000_000_000_000_000_000_000_000;
        // we use id to access the property we need to
        // we are gonna call the property's data and make it mutable to allow us to make the update
        let properties = &mut self.user_properties;
        //we iterate through each property until we find the one that matches the id
        properties.into_iter().for_each(|property| {

            //we change the status with the id to bought
            if property.id == id {  
                if property.status == "bought" {
                    env::log_str("property has been bought allready");
                }else{
                    property.status = "bought".to_string();
                    let owner = property.owner.parse().unwrap();
                    // we then transfer the amount to the owner of the property
                    Promise::new(owner).transfer(property.price * a_near);
                    env::log_str("property bought successfully");
                }              
                    
            }else{
                env::log_str("the property does not exist");
            }
        })

        
    }

    // counting of users
    pub fn count_users(&mut self) -> usize{        
        self.users.len()       
    }

}



#[cfg(test)]
mod tests {
    use super::*;
    use near_sdk::test_utils::VMContextBuilder;
    use near_sdk::{testing_env, AccountId};

    fn get_context(predecessor: AccountId) -> VMContextBuilder {
        let mut builder = VMContextBuilder::new();
        builder.signer_account_id(predecessor);
        builder.account_balance(1_000_000_000_000_000_000_000_000_000_000);
        builder
    }

    #[test]
    fn reg_user(){
        let felix = AccountId::new_unchecked("felix.testnet".to_string());
        let context = get_context(felix.clone());
        testing_env!(context.build());

        let mut contract = Contract::new(felix.to_string());
        contract.reg_user("Felix Awere".to_string(), "Agent".to_string(), "0731862583".to_string());
        let result = contract.count_users();
        assert_eq!(result, 1);
    }

    #[test]
    fn check_user_registered_once(){
        let felix = AccountId::new_unchecked("felix.testnet".to_string());
        let molly = AccountId::new_unchecked("molly.testnet".to_string());

        let context = get_context(felix.clone());
        let context2 = get_context(molly.clone());
        testing_env!(context.build());
        testing_env!(context2.build());

        let mut user1 = Contract::new(felix.to_string());
        let mut user2 = Contract::new(molly.to_string());

        user1.reg_user("Felix Awere".to_string(), "Agent".to_string(), "0731862583".to_string());
        user2.reg_user("Molly Achieng".to_string(), "Agent".to_string(), "0731862583".to_string());
        let mut result = user1.count_users();
        assert_eq!(result, 1);
        result = user2.count_users();
        assert_eq!(result, 1);
        user2.reg_user("Molly Achieng".to_string(), "Agent".to_string(), "0731862583".to_string());
        result = user2.count_users();
        assert_eq!(result, 1);
    
    }

    #[test]
    fn test_property_added(){
        let felix = AccountId::new_unchecked("felix.testnet".to_string());
        let context = get_context(felix.clone());
        testing_env!(context.build());

        let mut user1 = Contract::new(felix.to_string());
        user1.new_property("39 Riara".to_string(), 30_000, "Nairobi".to_string(), "a very nice house to spend in pet friendly".to_string());
        user1.new_property("48 Mango".to_string(), 300_000, "Nairobi".to_string(),  "a very nice house to spend in pet friendly".to_string());
        let result = user1.count_properties();
        assert_eq!(result, 2);
    }

    #[test]
    fn test_property_bought(){
        let felix = AccountId::new_unchecked("felix.testnet".to_string());
        let context = get_context(felix.clone());
        testing_env!(context.build());

        let mut user1 = Contract::new(felix.to_string());
        user1.new_property("39 Riara".to_string(), 30_000, "Nairobi".to_string(), "a very nice house to spend in pet friendly".to_string());
        user1.buy_property(0);
        let properties = user1.list_properties();
        println!("{:?}", properties);
        user1.list_properties();
        assert_eq!(properties[0].status.to_string(), "bought".to_string());
    }

    #[test]
    fn view_user(){
        let felix = AccountId::new_unchecked("felix.testnet".to_string());
        let context = get_context(felix.clone());
        testing_env!(context.build());

        let mut contract = Contract::new(felix.to_string());
        println!("{:?}", contract);
        contract.reg_user("Felix Awere".to_string(), "Agent".to_string(), "0731862583".to_string());
        println!("{:?}", contract.view_account());
        let my_details = contract.view_account();
        match my_details {
            Some(value) => {
                assert_eq!(value.name, "Felix Awere".to_string());
                assert_eq!(value.username, felix.to_string());
                assert_eq!(value.contact, "0731862583".to_string());
            },
            None => {
                println!("User details null");
            }
        }
    }

    #[test]
    fn view_my_properties(){
        let felix = AccountId::new_unchecked("felix.testnet".to_string());
        let context = get_context(felix.clone());
        testing_env!(context.build());

        let mut user1 = Contract::new(felix.to_string());
        user1.new_property("39 Riara".to_string(), 30_000, "Nairobi".to_string(), "a very nice house to spend in pet friendly".to_string());
        user1.new_property("48 Mango".to_string(), 300_000, "Nairobi".to_string(),  "a very nice house to spend in pet friendly".to_string());

        let my_properties = user1.my_properties();
        // println!("{:?}", my_properties);
        my_properties.into_iter().for_each(|property|{
            assert_eq!(property.owner.to_string(), user1.account_owner);
        })
    }
}
