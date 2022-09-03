import React, { useState } from "react";
function NewProperty({ toggleModal }) {
  const [propertyName, setPropertyName] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [showNotification, setShowNotification] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    window.contract.new_property({
      property_name: propertyName,
      price: price * 1,
      location: location,
      description: description
    });
    setShowNotification(!showNotification);
    alert(`property : ${propertyName} ${price} ${location} ${description}`);
  };

  console.log(`its ${toggleModal}`);

  return (
    <div>
      {toggleModal == true && (
        <div className="addevent">
          <form onSubmit={handleSubmit}>
            <label>
              PropertyName
              <input
                type="text"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
              />
            </label>
            <label>
              price
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <label>
              location
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
            <label>
              description
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <input type="submit" className="submit" />
          </form>
        </div>
      )}
      {showNotification && <Notification />}
    </div>
  );
}

function Notification() {
  return (
    <aside>
      <footer>
        <div>succeded</div>
        <div>added a new property just now</div>
      </footer>
    </aside>
  );
}

export default NewProperty;
