import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "layout";
import PrivateRoute from "routes/private.routes";
import Login from "pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <PrivateRoute>
            <Switch>
              <Route path="/" component={Layout} />
            </Switch>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
