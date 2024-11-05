import { useContext, useEffect, useState } from "react";
import { UserContext } from "../appContext/userContext";

export default function Cart() {
  const { loggedUser } = useContext(UserContext);
  // const userID = loggedUser.id;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      if (loggedUser) {
        try {
          const response = await fetch(
            `https://farmerstore-0lmo.onrender.com/${loggedUser.id}`,
            {
              method: "GET",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
            }
          );

          if (!response.ok) {
            const errorMssg = await response.json();
            console.log(errorMssg.error);
            return;
          }

          const data = await response.json();
          setItems(data);
          console.log(loggedUser.id);
          console.log(data);
        } catch (err) {
          console.error("Error fetching cart:", err);
        }
      } else {
        console.error("User ID is undefined");
        console.log(loggedUser);
      }
    };

    fetchCart();
  }, [loggedUser]); // Added loggedUser to dependency array

  return (
    loggedUser?.email && (
      <div className="cart_wrapper">
        <div className="cart">
          {items.map((item) => (
            <div key={item._id} className="requestCart_items">
              <p>Product type: {item.product}</p>
              <p>Description: {item.variety}</p>
              <p>Quantity: {item.quantity}</p>
              <button>Remove item</button>
            </div>
          ))}
        </div>
        <div className="summary">
          <p>Order Summary</p>
          <p>Subtotal</p>
          <button className="confirm">Confirm Order</button>
        </div>
      </div>
    )
  );
}
