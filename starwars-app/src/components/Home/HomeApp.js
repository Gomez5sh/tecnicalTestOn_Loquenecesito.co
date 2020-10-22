import React from "react";
import { CharacterList } from "./CharacterList";
import { Layout } from "antd";
import { AboutApp } from "../About/AboutApp";

export const HomeApp = () => {
  const { Content } = Layout;
  return (
    <>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <CharacterList name="character" />
          <AboutApp />
        </Content>
      </Layout>
    </>
  );
};
