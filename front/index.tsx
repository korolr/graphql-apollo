import * as React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import App from "./component/app";

const cache = new InMemoryCache();

const URL = "http://localhost:4000/graphql";

const httpLink = new HttpLink({
  uri: URL,
  headers: {
    authorization: `${localStorage.getItem("token")}`
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
