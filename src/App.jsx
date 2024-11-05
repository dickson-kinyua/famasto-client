import "./App.css";
import { UserContextProvider } from "./appContext/userContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./pages/header";
import Categories from "./pages/categories";
import Popular from "./pages/popular";
import Chemicals from "./pages/chemicals";
import Machinery from "./pages/machinery";
import Seeds from "./pages/seeds";
import Request from "./pages/request";
import FooterInfo from "./pages/footer";
import HomePage from "./pages/homePage";
import Cart from "./pages/cart";
import AddMember from "./pages/addMember";
import Sell from "./pages/sell";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import ProductDetails from "./components/productDetails";
import Contact from "./pages/contact";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className={"app"}>
          <div className="main">
            <Header />
            <Categories />
            {/* <HomePage /> */}
            <FooterInfo />

            <div className="all">
              <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<Categories />} />

                <Route path="/popular" element={<Popular />} />
                <Route path="/chemicals" element={<Chemicals />} />
                <Route path="/machinery" element={<Machinery />} />
                <Route path="/seeds" element={<Seeds />} />
                <Route path="/request" element={<Request />} />
                <Route
                  path="/all"
                  element={
                    <>
                      <Popular />
                      <Chemicals />
                      <Machinery />
                      <Seeds />
                    </>
                  }
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/addMember" element={<AddMember />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
