import React from "react";
function ListProperties({ property }) {
  return (
    <div className="project">
      <h2>{property.property_name}</h2>
      <span className="creator">{property.owner}</span>
      <h3>Description</h3>
      <p>{property.description}</p>
      <h4>Location: {property.location} NEAR</h4>
      <h4>status: {property.status}</h4>
      <button
        onClick={() => {
          window.contract.buy_property({ id: property.id });
        }}
      >
        Buy property
      </button>
    </div>
  );
}

export default ListProperties;
