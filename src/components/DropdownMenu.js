import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "flex flex-col justify-center items-center w-full bg-red-500 text-lg space-y-6 font-semibold absolute"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/">Home</Link>
      <Link to="/nominees">My Nominees</Link>
      <Link to="/login" className="pb-4">
        Login | Logout
      </Link>
    </div>
  );
};

export default DropdownMenu;
