import React from "react";
import { UserItem } from "./UserItem";
import "./UserItem.css";

export const UsersList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="centre">No user Found</h2>;
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
