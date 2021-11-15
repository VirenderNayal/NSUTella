import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Explore from "./pages/explore/Explore";

function App() {
  const user = false;
  // const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/single" component={Single} />
      </Switch>
    </Router>
  );
}

export default App;
