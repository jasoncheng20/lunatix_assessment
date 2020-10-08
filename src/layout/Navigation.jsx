import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Sports from "pages/Sports";
import Checkout from "pages/Checkout";
import Subscribe from "pages/Subscribe";
import Home from "pages/Home";
import { Dropdown, Menu, Icon } from "semantic-ui-react";
import logo from "images/logo.png"
import theme from "styles/theme"

const menuStyle = {
  fontFamily: theme.fonts.Rotis,
}

const Navigation = () => {
  return (
    <Router>
      <div>
        <nav>
          <Menu style={menuStyle}>
            <Menu.Item>
            <NavLink to="/"><img src={logo} width="100px"/></NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/sports">SPORTS</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="#">CONCERTS</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="#">THEATER</NavLink>
            </Menu.Item>
            <Dropdown text="MORE" pointing="down" className="link item">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <NavLink to="/subscribe">SUBSCRIBE</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/checkout">CHECKOUT</NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item position="right">
              <NavLink to="#">MY TICKETS <Icon name="user" circular/></NavLink>
            </Menu.Item>
          </Menu>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sports">
            <Sports />
          </Route>
          <Route path="/subscribe">
            <Subscribe />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
