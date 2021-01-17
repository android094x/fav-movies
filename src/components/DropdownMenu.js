import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const DropdownMenu = ({ isOpen, toggle }) => {
  const { currentUser, logout } = useAuth();
  return (
    <div
      className={
        isOpen
          ? "flex flex-col justify-center items-center w-full bg-red-500 text-lg space-y-6 font-semibold absolute top-20"
          : "hidden"
      }
      onClick={toggle}
    >
      {currentUser && <Link to="/">Home</Link>}
      {currentUser && <Link to="/my-favs">My Favs</Link>}
      {currentUser && (
        <Link to="/signin" onClick={logout} className="pb-3">
          Logout
        </Link>
      )}
      {!currentUser && <Link to="/signin">Sign In</Link>}
      {!currentUser && (
        <Link to="/signup" className="pb-3">
          Sign Up
        </Link>
      )}
    </div>
  );
};

export default DropdownMenu;
