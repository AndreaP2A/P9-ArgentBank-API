import { HashRouter as Router, Route, Routes } from "react-router-dom"; //BrowserRouter didn't work (??)
import { Navigate } from "react-router-dom";
import Home from "../pages/home/home";
import SignIn from "../pages/sign-in/sign-in";
import User from "../pages/user/user";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="user/login" element={<SignIn />} />
        <Route
          path="/user/profile"
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
