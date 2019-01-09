import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import history from "./history";
import App from "./components/App";

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
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
