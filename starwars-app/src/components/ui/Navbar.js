import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";

export const Navbar = () => {
  const { Header } = Layout;

  return (
    <Layout>
      <Header className="header" style={{ zIndex: 1, width: "100%" }}>
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
          </Menu>
        </div>
      </Header>
    </Layout>
  );
};
