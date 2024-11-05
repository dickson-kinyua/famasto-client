import { Link } from "react-router-dom";
import useFetch from "../useFetch";

export default function Seeds() {
  const { products: seeds } = useFetch("http://localhost:4002/fetchSeeds");

  return (
    <div className="seeds">
      {seeds.map((seed) => {
        return (
          <div className="item_wrapper" key={seed._id}>
            <Link to={`/product/${seeds._id}`}>
              <img src="onion.jfif" alt="onion seeds" className="onionSeeds" />
              <p className="product">Seed title:{seed.variety}</p>
              <p>{seed.description}</p>
              <p className="price">{seed.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
