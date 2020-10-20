import React from "react";
import { AppRouter } from "./router/AppRouter";

export const StarWArsApp = () => {
  return (
    <>
      <div>
        <div className="flex container mx-auto py-6">
          <AppRouter />;
        </div>
      </div>
    </>
  );
};
