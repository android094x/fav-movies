import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header = ({ toggle }) => {
  const { currentUser, logout } = useAuth();

  return (
    <header className="bg-red-500 flex justify-between items-center px-4 h-20 absolute w-full font-mono">
      <Link to="/" className="text-3xl font-black flex items-center">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
        FavMovies
      </Link>
      <nav>
        <div className="cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="hidden md:block space-x-6 text-xl">
          {currentUser && <Link to="/">Home</Link>}
          {currentUser && <Link to="/my-favs">My Favs</Link>}
          {currentUser && (
            <Link to="/signin" onClick={logout}>
              Logout
            </Link>
          )}
          {!currentUser && <Link to="/signin">Sign In</Link>}
          {!currentUser && <Link to="/signup">Sign Up</Link>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
