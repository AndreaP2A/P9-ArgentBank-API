import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearToken, clearUserName } from "../features/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const isLoggedIn = useSelector((state) => !!state.user.token);

  const handleSignOut = () => {
    dispatch(clearToken());
    dispatch(clearUserName());
  };

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
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {userName}
            </Link>
            <Link className="main-nav-item" to="/" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
