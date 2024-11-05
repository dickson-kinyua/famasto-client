import { useContext } from "react";
import { UserContext } from "../appContext/userContext";
import RegisterPage from "./registerPage";

export default function Sell() {
  const { loggedUser } = useContext(UserContext);

  return (
    <>
      {loggedUser?.email && (
        <div className="sell">
          <p>Hello Farmer....What are you seling?</p>
          <div className="choices">
            <a href="#">Farm Machinery</a>
            <a href="#">Seeds/Seedlings</a>
          </div>
        </div>
      )}
      {!loggedUser?.email && <RegisterPage />}
    </>
  );
}
