import { useContext } from "react";
// import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../appContext/userContext";
import Explore from "../components/explore";
import { SearchResults } from "../components/searchResults";

export default function Header() {
  // const [redirect, setRedirect] = useState(false);

  const { loggedUser, setLoggedUser, email, name } = useContext(UserContext);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          "https://farmerstore-0lmo.onrender.com/profile",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          const errorMssg = await response.json();
          console.log(errorMssg);
          return;
        }

        const data = await response.json();

        console.log(data);

        if (JSON.stringify(data) !== JSON.stringify(loggedUser)) {
          setLoggedUser(data);
        }
      } catch (err) {
        console.log("Fetch error:", err);
      }
    };

    fetchUserProfile();
  }, [loggedUser]);

  function location() {
    alert("we are coming soon");
  }

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:4002/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }
      const data = await response.json();
      console.log(data);
      setLoggedUser({});
    } catch (err) {
      console.log("Logout error:", err);
    }
  };

  return (
    <div className="header_wrapper">
      <div className="header">
        <div className="header1">
          <p className="order_num">30</p>
          <div className="header1-orders">
            <p>Orders</p>
            <p>Last 7 days</p>
          </div>
        </div>
        <div className="header_links2">
          <Link to="/">Home</Link>
          <Link to="#" onClick={() => location()}>
            Location
          </Link>
          <Link to="#">About us</Link>
        </div>
        <div className="login_links">
          {!email && (
            <>
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/register" className="register">
                Register
              </Link>
            </>
          )}
          {email && (
            <>
              <p>Welcome,{name?.split(" ").map((name) => name)[0]}</p>
              <Link className="cart_link" to="/cart">
                Cart
              </Link>

              <img
                className="profile_pic"
                src={"pexels-photo-1005456.jpeg"}
                alt="Profile Pic"
              />
              <p className="date">{new Date().toLocaleDateString()}</p>
              <button onClick={logout} className="logoutbt">
                Logout➡
              </button>
            </>
          )}
        </div>
      </div>
      <Explore />
      <SearchResults />
    </div>
  );
}
