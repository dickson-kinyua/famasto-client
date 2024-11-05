import { useContext } from "react";
import { UserContext } from "../appContext/userContext";

export const SearchResults = () => {
  const { SearchResults } = useContext(UserContext);

  return (
    <div className="search">
      <p>Results</p>
    </div>
  );
};
