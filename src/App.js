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

import FadeIn from "./animations/FadeIn_ani";
import InnerText from "./animations/innerText_ani";
import Toggle from "./animations/toggleComponents_ani";
import Transform from "./animations/transform_ani";
import SlideDown from "./animations/SlideDown_ani";

const App = (props) => {
  return (
    <Router>
      <MainNavigation />
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
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  );
};

export default App;
