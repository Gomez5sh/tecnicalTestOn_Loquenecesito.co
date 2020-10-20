import React from "react";
import { CharacterList } from "./CharacterList";
import { Layout } from "antd";

export const HomeApp = ({ name }) => {
  return (
    <>
      <Layout>
        <div className="flex container mx-auto py-6">
          <ul>
            <CharacterList name="character" />
          </ul>
        </div>
      </Layout>
    </>
  );
};
