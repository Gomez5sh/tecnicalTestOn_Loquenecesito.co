import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./Navbar.css";

export const Navbar = () => {
  const { Header } = Layout;

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="navbar-nav navbar-expand-sm">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/"
            >
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/about"
            >
              About
            </NavLink>
          </Menu.Item>

          <Menu.Item>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/stack"
            >
              Stack
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};
