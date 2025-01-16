import { HashRouter as Router, Route, Routes } from "react-router-dom"; //BrowserRouter didn't work (??)
import Home from "../pages/home/home";
import SignIn from "../pages/sign-in/sign-in";
import User from "../pages/user/user";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
