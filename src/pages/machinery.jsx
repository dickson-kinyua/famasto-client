import { Link } from "react-router-dom";
import useFetch from "../useFetch";
export default function Machinery() {
  const { products } = useFetch(
    "https://farmerstore-0lmo.onrender.com/fetchMachine"
  );

  return (
    <div className="machinery">
      {products.length > 0 ? (
        products.map((product) => {
          return (
            <div className="item_wrapper" key={product._id}>
              <Link to={`/product/${product._id}`}>
                <img
                  className="item_image"
                  src={product.image || "Picture2.jpg"}
                  alt={product.name}
                />
                <p className="product">{product.name}</p>
                <p>{product.description}</p>
                <p className="price">{product.price}</p>
              </Link>
            </div>
          );
        })
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}
