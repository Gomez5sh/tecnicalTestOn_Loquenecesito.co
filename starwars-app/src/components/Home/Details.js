import { Layout } from "antd";
import React from "react";

export function Details({ person }) {
  return (
    <>
      <Layout>
        <div className="px-4">
          <h2 className="font-bold">{person.name}</h2>
        </div>
      </Layout>
    </>
  );
}
