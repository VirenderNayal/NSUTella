import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Explore from "./pages/explore/Explore";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Societies from "./pages/societies/Societies";

function App() {
  // const user = false;
  const user = true;
  return (
    <Router>
      <TopBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/societies">
          <Societies />
        </Route>
        <Route exact path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route exact path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route exact path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route exact path="/post/:postId">
          <Single />
        </Route>

        <Route exact path="/settings">
          <Settings />
        </Route>

        <Route exact path="/single">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
