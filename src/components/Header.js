import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggle }) => {
  return (
    <header className="bg-red-500 flex justify-between items-center px-4 h-16 relative w-full font-mono">
      <Link to="/" className="text-lg">
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
        <div className="hidden md:block">
          <Link to="/" className="px-2">
            Home
          </Link>
          <Link to="/nominees" className="px-2">
            My Nominees
          </Link>
          <Link to="/login" className="px-2">
            Login | Logout
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
