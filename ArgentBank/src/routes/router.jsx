import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "../pages/home/home";
import SignIn from "../pages/signIn/sign-in";
import User from "../pages/user/user";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
