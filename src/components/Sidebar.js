import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMenu } from "../utils/appSlice";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => {
    return state.app.isMenuOpen;
  });

  useEffect(() => {
    if (window.innerWidth <= 450) dispatch(hideMenu());
  }, []);

  // early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="w-56 p-4 shadow-lg overflow-y-auto">
      <ul className="border-b-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-full p-2 hover:cursor-pointer flex hover:bg-gray-200 mb-2 items-center gap-2 ${
              isActive ? "bg-gray-200" : ""
            } rounded-lg `
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
            className="w-5 h-5"
            alt="home"
          />
          Home
        </NavLink>
        <NavLink
          to="/shorts"
          className={({ isActive }) =>
            `w-full p-2 hover:cursor-pointer flex hover:bg-gray-200 mb-2 items-center gap-2 ${
              isActive ? "bg-gray-200" : ""
            } rounded-lg `
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
            className="w-5 h-5"
            alt="home"
          />
          Shorts
        </NavLink>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="border-b-2">
        <NavLink
          to="/music"
          className={({ isActive }) =>
            `w-full p-2 hover:cursor-pointer flex hover:bg-gray-200 mb-2 items-center gap-2 ${
              isActive ? "bg-gray-200" : ""
            } rounded-lg `
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
            className="w-5 h-5"
            alt="home"
          />
          Music
        </NavLink>
        <NavLink
          to="/sports"
          className={({ isActive }) =>
            `w-full p-2 hover:cursor-pointer flex hover:bg-gray-200 mb-2 items-center gap-2 ${
              isActive ? "bg-gray-200" : ""
            } rounded-lg `
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
            className="w-5 h-5"
            alt="home"
          />
          Sports
        </NavLink>
        <NavLink
          to="/gaming"
          className={({ isActive }) =>
            `w-full p-2 hover:cursor-pointer flex hover:bg-gray-200 mb-2 items-center gap-2 ${
              isActive ? "bg-gray-200" : ""
            } rounded-lg `
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
            className="w-5 h-5"
            alt="home"
          />
          Gaming
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `w-full p-2 hover:cursor-pointer flex hover:bg-gray-200 mb-2 items-center gap-2 ${
              isActive ? "bg-gray-200" : ""
            } rounded-lg `
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
            className="w-5 h-5"
            alt="home"
          />
          Movies
        </NavLink>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul className="border-b-2">
        <NavLink
          to="/music"
          className={({ isActive }) =>
            `w-full p-2 hover:cursor-pointer flex hover:bg-gray-200 mb-2 items-center gap-2 ${
              isActive ? "bg-gray-200" : ""
            } rounded-lg `
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
            className="w-5 h-5"
            alt="home"
          />
          Music
        </NavLink>
        <NavLink
          to="/sports"
          className={({ isActive }) =>
            `w-full p-2 hover:cursor-pointer flex hover:bg-gray-200 mb-2 items-center gap-2 ${
              isActive ? "bg-gray-200" : ""
            } rounded-lg `
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
            className="w-5 h-5"
            alt="home"
          />
          Sports
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
