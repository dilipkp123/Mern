import React from "react";
import Card from "../../Shared/Component/UIElements/Card";
import "./PlaceItem.css";

export const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card className='place-item__content'>
      <div className="place-item__image">
        <img src={props.image} alt={props.title}></img>
      </div>
      <div className="place-item__info">
        <h2>{props.title}</h2>
        <h3>{props.address}</h3>
        <p>
          {props.description}
        </p>
      </div>
      <div className="place-item__actions">
        <button>View on Map</button>
        <button>EDIT </button>
        <button>DELETE</button>
      </div>
      </Card>
    </li>
  );
};
