import { useSelector } from "react-redux";
import { RootState } from "store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from "layout";
import Login from "pages/login";

function App() {
  const { infoUser: user } = useSelector((state: RootState) => state.users);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <Route
            exact={false}
            path="/"
            render={() =>
              Object(user).email ? <Layout /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
