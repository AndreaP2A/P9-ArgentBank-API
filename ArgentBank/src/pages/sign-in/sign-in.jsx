import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getUserProfile } from "../../services/api";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      console.log("Login successful:", data);

      // Save token to localStorage
      const { token } = data.body;
      console.log("Storing token:", token);
      localStorage.setItem("token", token);

      // Fetch user profile to get firstName and lastName
      const profileData = await getUserProfile(token);
      const { firstName } = profileData.body;
      console.log("Storing user name:", firstName);
      localStorage.setItem("userName", firstName);

      // Redirect to user profile
      navigate("/user");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
