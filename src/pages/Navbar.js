import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "./Header";
import tokenService from "../services/token.service";

const Navbar = () => {
const navigate = useNavigate();

  const logout = () => {
    tokenService.removeUser();
    navigate('/login');
  }

  return (
    <div className="header">
      <Header />

      <div className="navigation">
        <div className="container">
          <div className="row">
            <nav className="sidenavbar navbar-expand navbar-light">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                      {" "}
                      Dashboard{" "}
                    </NavLink>
                  </li>
                  {/* <li className="nav-item"><NavLink className="nav-link" exact to="/company"> My office </NavLink></li>  */}

                  {/* <ul className="menus">
                                    {menuitems.map((menu, index) => {
                                      const depthLevel = 0;
                                      return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                                    })}
                                  </ul> */}

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/clients">
                      {" "}
                      Clients
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/assignment">
                      {" "}
                      Assignment Managments
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/milestone">
                      {" "}
                      Milestone{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/plans">
                      {" "}
                      Plans{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user">
                     Users{" "}
                    </NavLink>
                  </li>
                 
                  <li className="nav-item">
                    <NavLink className="nav-link"  to="/">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
