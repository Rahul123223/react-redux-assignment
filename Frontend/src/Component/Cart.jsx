import { useEffect, useState } from "react";
import './css/cart.css';
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { cart_get, cart_total, cart_update } from "../Redux/Cart/action";
import Box from '@mui/material/Box';
import { Navigate, useNavigate } from "react-router-dom";


export const Cart = () => {

    const [cart, setCart] = useState([]);
    let sum = 0, cnt = 0;
    const navigate = useNavigate();
    // console.log("The sum is ",sum);
    //when component get mounted to the UI then it will call here 
    //always remember in the fetch only we need to convert data in the form of json
    //in axios we not need to convert in the form of the json it automatically convert 

    const dispatch = useDispatch();
    const getData = () => {
        fetch(`https://powerful-thicket-30637.herokuapp.com/cart`)
            .then(res => res.json())
            .then(res => setCart(res))
            .catch(err => console.log(err))
        // dispatch(cart_get());
    }
    // console.log("The cart is", cart);
    cart.forEach(E => {
        sum = sum + E.price;
        cnt++;
    })
    // console.log("The sum is", sum)

    useEffect(() => {
        getData();
        dispatch(cart_update(cnt, Math.floor(sum)));

    }, [sum, cnt])

    const state = useSelector((state) => state.cart);
    console.log("The state is", state);
    const handleremove = (e) => {
        let id = e.target.id;
        // console.log(e.target.id);
        // console.log("The id is",id);
        fetch(`https://powerful-thicket-30637.herokuapp.com/cart/${id}`, {
            method: "DELETE",
        }).then(res=>{
            alert("Delete Item Succesfully");
            window.location.reload()
        }).catch(err=>{console.log(err)})
    }
    const checkOut = () => {
        alert("Welcome to the checkout page")
        navigate('/checkout');
    }
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

                                <Button variant="contained" color="secondary" id={e._id}
                                    onClick={handleremove}
                                >DELETE</Button>
                                {/* <button id={e.id} onClick={handleremove}>DELETE</button> */}
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div id="cart_total">
                <div >
                    {cart.map((e) => (
                        <>
                            <div className="cart_div">
                                <div>
                                    <img width={"15%"} height={"50%"} src={e.image} alt="" />
                                </div>
                                <div>
                                    <h5>Title:{e.title}</h5>
                                    <h5>Price{e.price}</h5>
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
                    <Box sx={{
                        margin: 2,
                        borderRadius: 450,
                        width: 250,
                        height: 100
                    }}>
                        <Button variant="contained" color="secondary"
                            onClick={checkOut}
                        >
                            Proceed To checkout
                        </Button>

                    </Box>

                </div>
            </div>
        </div>
    )
}