import React, { useState } from "react";

import { Link } from "react-router-dom";
import Backdrop from "../UIElements/Backdrop";
import { MainHeader } from "./MainHeader";

import "./MainNavigation.css";
import { NavLinks } from "./NavLinks";
import { SideDrawer } from "./SideDrawer";

export const MainNavigation = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerOpenHandler = () => {
    setIsDrawerOpen(true);
  };
  const drawerCloseHandler = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      {isDrawerOpen && <Backdrop onClick ={drawerCloseHandler}></Backdrop>}
      {isDrawerOpen && (
        <SideDrawer  onClick ={drawerCloseHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks></NavLinks>
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={drawerOpenHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/"> Your places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </MainHeader>
    </>
  );
};
