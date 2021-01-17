import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { FavMoviesProvider } from "./contexts/FavMoviesContext";
import PrivateRoute from "./PrivateRoute";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import DropdownMenu from "./components/DropdownMenu";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Nominees from "./components/Nominees";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className="bg-gray-900 h-full relative">
      <AuthProvider>
        <FavMoviesProvider>
          <BrowserRouter>
            <Header toggle={toggle} />
            <DropdownMenu isOpen={isOpen} toggle={toggle} />
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <PrivateRoute path="/my-favs" component={Nominees} />
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
            </Switch>
          </BrowserRouter>
        </FavMoviesProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
