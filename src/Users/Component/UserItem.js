import React from "react";

import "./UserItem.css";
import Avatar from "../../Shared/Component/UIElements/Avatar";
import { Link } from "react-router-dom";
import Card from "../../Shared/Component/UIElements/Card";

export const UserItem = (props) => {
  console.log(props, "Props received in userItem");
  return (
    <li className="user-item">
      <Card className='user-item__content'>
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name}></Avatar>
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placecount} {props.placecount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
