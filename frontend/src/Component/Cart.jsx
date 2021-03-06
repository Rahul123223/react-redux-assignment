import { useEffect, useState } from "react";
import "./css/cart.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { cart_get, cart_total, cart_update } from "../Redux/Cart/action";
import Box from "@mui/material/Box";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


export const Cart = () => {
  const [cart, setCart] = useState([]);
  let sum = 0,
    cnt = 0;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getData = () => {
    fetch(`https://ecom-app-herok.herokuapp.com/cart`)
      .then((res) => res.json())
      .then((res) => setCart(res))
      .catch((err) => console.log(err));
  };
  cart.forEach((E) => {
    sum = sum + E.price;
    cnt++;
  });

  useEffect(() => {
    getData();
    dispatch(cart_update(cnt, Math.floor(sum)));
  }, [sum, cnt]);

  const state = useSelector((state) => state.cart);
  console.log("The state is", state);
  const handleremove = (e) => {
    let id = e.target.id;
    fetch(`https://ecom-app-herok.herokuapp.com/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        toast.success("Delete Item Succesfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkOut = () => {
    // alert("Welcome to the checkout page");

    navigate("/payment");
  };
  return (
    <div id="cart_container">
      <div id="cart_info">
        {cart.map((e) => (
          <>
            <div className="prod_info" key={e.id}>
              <div>
                <img src={e.image} alt="" />
              </div>
              <div>
                <h4>Title:{e.title}</h4>
                <p>Description:{e.description}</p>
                <p>Price:{e.price}₹</p>

                <Button
                  variant="contained"
                  color="secondary"
                  id={e._id}
                  onClick={handleremove}
                >
                  DELETE
                </Button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div id="cart_total">
        <div>
          {cart.map((e) => (
            <>
              <div className="cart_div">
                <div>
                  <img width={"15%"} height={"50%"} src={e.image} alt="" />
                </div>
                <div>
                  <h5>Title : {e.title}</h5>
                  <h3>Price :{e.price}</h3>
                </div>
                <hr />
              </div>
            </>
          ))}
          <hr />
          <div className="value">
            <h5>Item:{cnt}</h5>
            <h5>Total Price:{Math.ceil(sum)}</h5>
          </div>
          <Box
            sx={{
              margin: 2,
              borderRadius: 450,
              width: 250,
              height: 100,
            }}
          >
            <Button variant="contained" color="secondary" onClick={checkOut}>
              Proceed To Payment
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};
