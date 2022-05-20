# Real Estate App

A project based on introducing a real estate app in the near blockchain which makes the process of aquiring residential places to stay much easier.

## Tools used

1. Rust Programming Language
2. Shell
3. near-sdk-rs library

## Concept

This contract enable users logged in using their near accounts to be able to update their account details, see properties added by them or other users and add a new property to sale

## For example

Assuming we had two men, Brian and Felix.

1. Brian has a set of houses he needs to rent,
2. Felix on the other hand is looking for a place to stay... Maybe he is new in town meaning he doesn't know anything about the town or anyone within.
3. Assuming both of them registered in the app, Brian would raise a notification by adding his properties and storing them on the app.
4. Since Felix is in need of the house at that particular time, He will be able to view the housed added by brian and choose which one he wants to stay on.

## What It actually does

### Authentication

User must log in to the near cli using his account id to be able to interact with the contract.

### Addition of the properties

once the user has logged in he can then add properties based on the fields like the property name, price and description. upon addition. some fields get filled automatically, like the ID auto increments depending on the length of our storage. the owner of the property is also added automatically as the field is filled with the current id involved in the function execution

### listing of property

Of course the buyer will need to see the full description, location and price to judge out the kind of taste he or she would like to settle into. when as long as he is logged in, he is able to list the properties and view all of them

### Buying of a Property

The customer is able to buy a property in our app, we assume that the price of the property we added earlier is in near. when a property is bought, the status of the property changes to bought and an amount equal to the price is sent to the owner of the property.

## Other functions

### Update and view account

A user can update and view his account details at his own pleasure.

### Count Properties and users

A user could also count the number of properties and users registered in the contract

## file Structure

```
Root Folder
.
├── build.sh
├── Cargo.lock
├── Cargo.toml
├── deploy.sh
├── dev-deploy.sh
├── init-args.js
├── LICENSE
├── README.md
├── rustfmt.toml
└── src
    ├── lib.rs
    └── wasm


```

## Setting Up the environment for our Contract Interaction

### Step 1: Install Rustup and set up a wasm target

1. run `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
2. Configure your current shell by running `source $HOME/.cargo/env`
3. Add a wasm target to your tool chain by running `rustup target add wasm32-unknown-unknown`

### Step 2: Install nodejs

Depending on your operating systems, for example mine is fedora. i would run the following code on the terminal.

```
sudo dnf install nodejs
```

For windows users you would download nodejs from their official website. with the link below
https://https://nodejs.org/
nodejs is needed to run our near cli which we would discuss on how to install it in the next step

### Step 3: Install Near CLI

to install the near cli run the following code in your terminal

```
npm install -g near-cli
```

### Step 4: Log in to your near CLI

Type `near login` in your terminal, you shall be redirected to a browser that looks like this.
![saveddd](https://user-images.githubusercontent.com/92982964/169411895-1b2fbc51-631f-4c3d-85d6-3d0a509694e2.png)


### Step 5: Clone Code

to clone my code, you can either download it directly from github or run `git clone https://github.com/Felabs1/near-real-estate.git` in your terminal

### Step 6: Build Code

navigate to the contract folder, open terminal and run `./build.sh` if you need to build the app
run `./test.sh` if you need to test the app.

### Step 7: Deploying the .wasm file

In this step i presume you managed to compile and test the code successfully. the .wasm file was generated then copied to wasmfile folder for easier accessibility.
`near deploy $accountname.testnet --wasmFile ./wasmfile/near_real_estate.wasm`

## Interacting with our Real Estate App

### List of function Calls

1. reg_user (Registering a user) `near call $account.testnet reg_user '{"name": "Felabs", "usertype": "owner", "contact": "0111942081"}' --accountId $account.testnet`
2. new_property (Adding a new Property) `near call $account.testnet new_property '{"property_name": "Felabs Apartments", "price": 3, "location": "Kisumu", "description": "a very nice place to recide in"}' -- accountId $account.testnet`
3. count_properties (counting properties) `near call $account.testnet count_properties --accountId $account.testnet`
4. edit_account (editing your user details)`near call $account.testnet edit_account '{"name": "Felabs", "usertype": "customer", "contact": "0111942081"}' --accountId $account.testnet`
5. view_account (viewing your account details)`near call $account.testnet view_account --accountId $account.testnet `
6. list_properties (listing all properties)`near call $account.testnet list_properties --accountId $account.testnet `
7. buy_property (buying a property)` near call $account.testnet buy_property '{"id": 0}' --accountId $account.testnet`
8. count_users (counting the number of users)` near call $account.testnet count_users --accountId $account.testnet`

where $account.testnet represents your testnet account id`s

## Author
### Felix Awere | Software Engineer 
