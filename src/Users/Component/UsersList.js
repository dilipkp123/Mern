import React from "react";
import Card from "../../Shared/Component/UIElements/Card";
import { UserItem } from "./UserItem";
import "./UserItem.css";

export const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card>
        <h2 className="centre">No user Found</h2>
      </Card>
    );
  } else {
    return (
      <ul className="users-list">
        {props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placecount={user.placecount}
            ></UserItem>
          );
        })}
      </ul>
    );
  }
};
