import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../../components/NavBar";
import UserHeader from "../../components/UserHeader";
import AccountSection from "../../components/AccountSection";
import Footer from "../../components/Footer";
import { fetchUserProfile } from "../../features/userSlice";

const User = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const token = useSelector((state) => state.user.token);
  const hasFetchedProfile = useRef(false); // to prevent multiple dipatches of fetchUserProfile

  useEffect(() => {
    if (token && !userName && !hasFetchedProfile.current) {
      hasFetchedProfile.current = true; // Set the flag immediately after first dispatch to prevent other dispatches
      dispatch(fetchUserProfile(token));
    }
  }, [token, userName, dispatch]);

  return (
    <div>
      <NavBar />
      <main className="main bg-dark">
        {userName ? (
          <UserHeader userName={userName} />
        ) : (
          <p>Loading user data...</p>
        )}
        <h2 className="sr-only">Accounts</h2>
        <AccountSection
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <AccountSection
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <AccountSection
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </div>
  );
};

export default User;
