import { Layout } from "antd";
import React from "react";
import { AppRouter } from "./router/AppRouter";

export const StarWArsApp = () => {
  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
};
