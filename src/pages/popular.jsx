import { Link } from "react-router-dom";
import useFetch from "../useFetch";

export default function Popular() {
  const { products } = useFetch("http://localhost:4002/fetchPopulars");

  return (
    <div className="popular">
      {products.map((product) => {
        return (
          <div className="item_wrapper" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img
                className="item_image"
                src="download.jfif"
                alt="item image"
              />
              <p className="product">Title:{product.product}</p>
              <p className="">{product.description}</p>
              <p className="price">{product.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
