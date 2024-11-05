import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        email: loggedUser?.email,
        name: loggedUser?.fullnames,
        setLoggedUser,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
