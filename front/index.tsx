import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

import history from "./history";
import App from "./components/App";

import "../node_modules/antd/dist/antd.min.css";

const URL =
  process.env.NODE_ENV === "production" ? "/graphql" : process.env.FRONT_URL;

const httpLink = createHttpLink({
  uri: URL
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  console.log(token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : ""
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
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
