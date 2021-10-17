import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "../src/shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth_context";

// import FadeIn from "./animations/FadeIn_ani";
// import InnerText from "./animations/innerText_ani";
// import Toggle from "./animations/toggleComponents_ani";
import Transform from "./animations/transform_ani";
import SlideDown from "./animations/SlideDown_ani";

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  //  <!-- Setting Routes -->
  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Users />
          {/* <FadeIn></FadeIn> */}
          {/* <InnerText></InnerText> */}
          {/* <Toggle></Toggle> */}

          <Transform></Transform>
          <SlideDown></SlideDown>
        </Route>
        <Route path='/:userId/places' exact>
          <UserPlaces />
        </Route>
        <Route path='/places/new' exact>
          <NewPlace />
        </Route>
        <Route path='/places/:placeId'>
          <UpdatePlace />
        </Route>
        <Redirect to='/'></Redirect>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Users />
          {/* <FadeIn></FadeIn> */}
          {/* <InnerText></InnerText> */}
          {/* <Toggle></Toggle> */}

          <Transform></Transform>
          <SlideDown></SlideDown>
        </Route>
        <Route path='/:userId/places' exact>
          <UserPlaces />
        </Route>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Redirect to='/auth'></Redirect>
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
