import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../appContext/userContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setLoggedUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null); // For error handling

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4002/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include", // This ensures cookies are sent with the request
      });

      if (!response.ok) {
        const errorMssg = await response.json();
        console.log(errorMssg);
        setErrorMessage(errorMssg.error);
        return;
      }

      const data = await response.json(); // Await the parsed JSON response
      console.log(data);
      setRedirect(true);
      setLoggedUser(data);
    } catch (error) {
      console.log(error);
      setErrorMessage("Invalid email or password"); // Show error feedback
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="loginPage">
      <form className="loginform" onSubmit={login}>
        <h2>Login</h2>
        <label>Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <div className="error_div">{errorMessage}</div>}
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Create new account</Link>
        </p>
      </form>
      <div className="sign_in-image">
        <img src="/bg4.jpg" alt="sign up image" className="sign_image" />
      </div>
    </div>
  );
}
