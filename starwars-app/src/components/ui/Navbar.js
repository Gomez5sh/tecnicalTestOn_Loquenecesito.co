import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./Navbar.css";

export const Navbar = () => {
  const { Header } = Layout;

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <div className="navbar-collapse">
            <div className="navbar-nav">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/stack"
              >
                Stack
              </NavLink>
            </div>
          </div>
        </Menu>
      </Header>
    </Layout>
  );
};
