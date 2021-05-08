import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider, ApolloClient, InMemoryCache, split } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { getMainDefinition } from '@apollo/client/utilities';

const GRAPHQL_ENDPOINT = "/graphql";

const httpLink = createUploadLink({
  uri: `http://localhost:5001${GRAPHQL_ENDPOINT}`,
  credentials: "include",
});

// const splitLink = split(({ query }) => {
//   const definition = getMainDefinition(query);
//   return definition.kind === "OperationDefinition" && definition.operation === "subscription";
// }, httpLink);

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
