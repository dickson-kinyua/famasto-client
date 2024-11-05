// import { useContext } from "react";
// import { UserContext } from "../appContext/userContext";

export default function HomePage() {
  // const { searchResults } = useContext(UserContext);
  // console.log(searchResults);

  return (
    <div className="search_wrapper">
      <div className="homeItems">
        <div className="discount">
          <p>Get up to 50% off</p>
          <button className="get_discount">Get Discount</button>
        </div>
        <div className="discount">
          <p>Reduce farm input cost by 30%</p>
          <button className="get_discount">Learn more</button>
        </div>
        <div className="discount">
          <p>Emerging Technologies</p>
          <button className="get_discount">More information</button>
        </div>
        <div className="rainy">
          <p>Rainy season Recommendations</p>
          <button className="get_discount">+</button>
        </div>
        <div className="rainy">
          <p>Rainy season Recommendations</p>
          <button className="get_discount">+</button>
        </div>
        <div className="rainy">
          <p>Rainy season Recommendations</p>
          <button className="get_discount">+</button>
        </div>
      </div>
    </div>
  );
}
