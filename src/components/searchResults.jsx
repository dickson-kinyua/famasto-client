import { useContext } from "react";
import { UserContext } from "../appContext/userContext";

export const SearchResults = () => {
  const { searchResults } = useContext(UserContext);

  return (
    <>
      {searchResults.length >= 1 && (
        <div className="search1">
          {searchResults.length >= 1 ? (
            searchResults.map((result) => {
              return (
                <div key={result._id} className="search_div">
                  <img src="/download.jfif" alt="search result " />
                  <p>{result.name}</p>
                  <p>{result.description}</p>
                  <p>{result.price}</p>
                  <p>Uploaded at:{result.createdAt}</p>
                </div>
              );
            })
          ) : (
            <div className="no_results">
              <p>No results</p>
            </div>
          )}
          <button className="close_search">✖ Close</button>
        </div>
      )}
    </>
  );
};
