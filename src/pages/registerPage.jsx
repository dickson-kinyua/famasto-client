import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function RegisterPage() {
  const [fullnames, setFullnames] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);

  async function registerUser(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4002/register", {
        method: "POST",
        body: JSON.stringify({ fullnames, phonenumber, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response) {
        console.log("could not create account");
      }
      const json = await response.json();

      if (response.status === 200) {
        alert(json.message);
        setRedirect(true);
      } else {
        setError(json.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="registerPage">
      <form className="registerform" onSubmit={registerUser}>
        <h2>Create a new account</h2>
        <label>FullNames</label>
        <input
          type="text"
          value={fullnames}
          onChange={(e) => setFullnames(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          type="number"
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
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
        {error && <div className="error_div">{error}</div>}
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
      <div className="sign_in-image">
        <img src="/bg4.jpg" alt="sign up image" className="sign_image" />
      </div>
    </div>
  );
}
