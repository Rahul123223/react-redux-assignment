import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./Component/Home";
import { Login } from "./Component/Login";
import { Navbar } from "./Component/Navbar";
import { Register } from "./Component/Register";
import { ProductPage } from "./Component/ProductPage";
import { Cart } from "./Component/Cart";
import { Pagecheck } from "./Component/Pagecheck";
import { Payment } from "./Component/Payment";
import { Category } from "./Component/Catogery";
import { Otp } from "./Component/Otp";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login"></Navigate>;
};

function App() {
  const isAuthenticated = true;

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home></Home>
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/product-page/:id" element={<ProductPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Pagecheck />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/category/:cat" element={<Category />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
      </Routes>
    </>
  );
}

export default App;
