import React from "react";

import { UsersList } from "../Component/UsersList";
import myimg from '../../Assets/FB_IMG_1611471824761.jpg'

export const Users = () => {
  const USERS = [
    {
      id: "M1",
      name: "Dilip Kumar",
      placecount: "5",
      image: myimg,
    },
  ];
  return <UsersList items={USERS}></UsersList>;
};
