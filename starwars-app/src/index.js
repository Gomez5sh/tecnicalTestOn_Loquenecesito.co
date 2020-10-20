import React from "react";
import ReactDOM from "react-dom";
import { StarWArsApp } from "./StarWarsApp";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://swapi.apis.guru/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StarWArsApp />
  </ApolloProvider>,
  document.getElementById("root")
);
