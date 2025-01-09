import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import UserHeader from "../../components/UserHeader";
import AccountSection from "../../components/AccountSection";
import Footer from "../../components/Footer";
import { getUserProfile } from "../../services/api";

const User = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const data = await getUserProfile(token);
          console.log("User profile data:", data);
          const { firstName, lastName } = data.body;
          setUserName(`${firstName} ${lastName}`);
          console.log("User name set to:", `${firstName} ${lastName}`);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        console.error("No token found in localStorage");
      }
    };

    fetchUserData();
  }, []);

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
