import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../appContext/userContext";

export default function Contact() {
  const { email } = useContext(UserContext);
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleContact(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4002/contact", {
        method: "POSt",
        body: JSON.stringify({ name, userEmail, message }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorMssg = await response.json();
        console.log(errorMssg);
        return;
      }

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("unexpected error", error);
    }
  }

  return (
    <div className="contact_form--div">
      {email && (
        <form onSubmit={handleContact}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label>Please leave us a message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      )}
      {!email && (
        <div className="no_email">
          <p>You are not logged in..</p>
          <Link to={"/login"}>Proceed to login Page</Link>
        </div>
      )}
    </div>
  );
}
