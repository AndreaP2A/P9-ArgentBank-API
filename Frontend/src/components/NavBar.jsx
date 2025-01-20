import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearToken, clearUserName } from "../features/userSlice";

// refactoring avec sous-composants logo et sign-in/out
const NavBar = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const isLoggedIn = useSelector((state) => !!state.user.token);

  // Handling the user logging out -> dispatch of the clearToken and clearUserName actions
  const handleSignOut = () => {
    dispatch(clearToken());
    dispatch(clearUserName());
  };

  const firstName = userName.split(" ")[0];

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./src/assets/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <Link className="main-nav-item" to="/user/profile">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            <Link className="main-nav-item" to="/home" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/user/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
