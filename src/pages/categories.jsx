import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../appContext/userContext";

export default function Categories() {
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  const logout = async () => {
    try {
      const response = await fetch(
        "https://farmerstore-0lmo.onrender.com/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      setLoggedUser(null);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <aside className="categories">
      <Link className="logo" to="/">
        Fama<span>S</span>to
      </Link>
      <div className="categories_explore">
        <Link to="/popular" className="categories_links">
          Popular Products
        </Link>
        <Link className="explore_new" to="#">
          Explore New
        </Link>
        <Link to="/chemicals" className="categories_links">
          Farm chemicals
        </Link>
        <Link to="/machinery" className="categories_links">
          Machinery
        </Link>
        <Link to="/seeds" className="categories_links">
          Seeds
        </Link>
      </div>
      <div className="categories_actions">
        <p>Quick Actions</p>
        <Link to="/request">+ Request a product</Link>
        <Link to="#">+ Add member</Link>
      </div>
      <div className="categories_orders">
        <p>Last orders:30</p>
      </div>
      {/* <div className="categories_logout">
        <button onClick={logout} className="logout_button">
          Logout
        </button>
      </div> */}
    </aside>
  );
}
