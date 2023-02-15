import React from "react";
import Card from "../../Shared/Component/UIElements/Card";
import "./PalceList.css";
import { PlaceItem } from "./PlaceItem";

export const PlaceList = (props) => {
  if (props.item.length === 0) {
    return(
      <div className="place-list center">
      <Card>
        <h2>No Places Found. Please Create New Places</h2>
        <button>Share Place</button>
      </Card>
    </div>
    )
    }
  return(
  <ul className="place-list">
    {props.item.map((place) => {
    return  <PlaceItem
        key={place.id}
        id={place.id}
        image={place.image}
        title={place.title}
        address = {place.address}
        description={place.description}
        creatorId = {place.creator}
        location = {place.coordinates}
      >

      </PlaceItem>;
    })}
  </ul>)
};
