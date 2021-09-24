import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AdminLayout } from "layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={(): ReactElement => <Redirect to="/admin" />}
          />
          <Route exact={false} path="/admin" component={AdminLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
