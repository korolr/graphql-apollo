import * as React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Header from "./Header";
import Home from "./Home";
import { Layout } from "antd";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/basket" component={Home} isAuth={true} />
          </Switch>
        </Header>
      </Layout>
    );
  }
}

export default App;