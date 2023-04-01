import React from "react";
import Sidebar from "./Sidebar";
import "./commonStyle.css";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex body_container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
