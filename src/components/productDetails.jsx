import { useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";

export default function ProductDetails() {
  const { id } = useParams();

  const {
    products: product,
    loading,
    error,
  } = useFetch(`http://localhost:4002/fetchChemicalDetails/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product details</div>;
  console.log("Fetched product:", product);

  return (
    <div className="prod_details">
      {product ? (
        <div className="details_wrapper">
          <div className="product_itself" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img className="details_image" src="/7.jpeg" alt="item image" />
              <p className="product">{product.name}</p>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
            </Link>
          </div>
          <div>hello</div>
        </div>
      ) : (
        "No product details available"
      )}
    </div>
  );
}
