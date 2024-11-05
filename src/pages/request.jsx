import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../appContext/userContext";
import RegisterPage from "./registerPage";

export default function Request() {
  const [product, setProduct] = useState("");
  const [variety, setVariety] = useState("");
  const [quantity, setQuantity] = useState("");
  const [style, setStyle] = useState("hideAdd");
  const [err, setErr] = useState(null);
  const { loggedUser } = useContext(UserContext);

  const resetForm = () => {
    setProduct("");
    setVariety("");
    setQuantity("");
  };
  const requestHandler = async (e) => {
    e.preventDefault();
    // Clear any previous errors
    setErr(null);
    try {
      const response = await fetch("http://localhost:4002/request", {
        method: "POST",
        body: JSON.stringify({ product, variety, quantity }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      // Check if response is okay
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }
      const data = await response.json();
      console.log(data);
      alert("Request added to cart");
      resetForm();
      console.log(loggedUser.id);
    } catch (error) {
      console.error("Error in request:", error);
      setErr(error.message); // Set the error message
    }
  };

  function toggleStyle() {
    if (style !== "hideAdd") setStyle("hideAdd");
    else setStyle("showAdd");
  }

  return (
    <>
      {loggedUser?.email && (
        <div className="request-wrapper">
          <button className="request_button" onClick={toggleStyle}>
            +Request a product
          </button>
          <form className={style} onSubmit={requestHandler}>
            <p>Enter your item details</p>
            <input
              type="text"
              name="product"
              placeholder="Product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
            <input
              type="text"
              name="variety"
              placeholder="Variety"
              value={variety}
              onChange={(e) => setVariety(e.target.value)}
            />
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button type="submit">Make request</button>
            {err && <div className="err">{err}!!</div>}
          </form>
        </div>
      )}
      {!loggedUser?.email && <RegisterPage />}
    </>
  );
}
