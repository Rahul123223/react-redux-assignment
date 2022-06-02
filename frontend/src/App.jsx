import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Component/Home";
import { Login } from "./Component/Login";
import { Navbar } from "./Component/Navbar";
import { Register } from "./Component/Register";
import { ProductPage } from "./Component/ProductPage";
import { Cart } from "./Component/Cart";
import { AddressForm } from "./Component/AddressForm";
import { Category } from "./Component/Catogery";
import { Otp } from "./Component/Otp";
import {Footer} from "./Component/Footer"
import {Payment} from "./Component/Payment"
import {ThankYou} from "./Component/ThankYou";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/product-page/:id" element={<ProductPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<AddressForm />}></Route>
        <Route path="/category/:cat" element={<Category />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/thankyou" element={<ThankYou />}></Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
