import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductManagementLayout } from "layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={false} path="/" component={ProductManagementLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
