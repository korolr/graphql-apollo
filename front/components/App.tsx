import * as React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Basket from "./Basket"
import { Layout } from "antd";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/basket" component={Home} isAuth={true} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/bas" component={Basket} />
          </Switch>
        </Header>
      </Layout>
    );
  }
}

export default App;
