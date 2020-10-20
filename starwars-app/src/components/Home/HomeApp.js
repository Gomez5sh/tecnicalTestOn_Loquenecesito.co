import React from "react";
import { CharacterList } from "./CharacterList";
import { Layout } from "antd";

export const HomeApp = ({ name }) => {
  return (
    <>
      <Layout>
        <div>
          <h1>Character Screen</h1>
          <hr></hr>
          <CharacterList name="character" />
        </div>
      </Layout>
    </>
  );
};
