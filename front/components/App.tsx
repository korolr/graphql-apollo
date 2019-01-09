import * as React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Header from "./Header";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/basket" component={Home} isAuth={true} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
