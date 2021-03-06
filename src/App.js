import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import Societies from "./pages/societies/Societies"
import Blog from "./pages/blog/Blog";
import Explore from "./pages/explore/Explore";
import GitGithub from "./pages/git-github/GitGithub";
import OpenSource from "./pages/open-source/OpenSource";
import NotFound from "./pages/NotFound/NotFound";
import Account from "./pages/Account/Account";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/explore/git-github" component={GitGithub} />
          <Route exact path="/explore/open-source" component={OpenSource} />
          <Route exact path="/societies" component={Societies} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/account" component={Account} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
