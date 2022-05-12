import { useEffect, useState } from "react";
import './css/cart.css';
import Button from "@mui/material/Button";
import { useDispatch,useSelector } from "react-redux";
import { cart_get } from "../Redux/Cart/action";
export const Cart = () => {

    const [cart, setCart] = useState([]);
    const dispatch=useDispatch();
    const state=useSelector((state)=>state);
    console.log("The state is",state);
    const getData = () => {
        fetch(` http://localhost:8080/cart`)
            .then(res => res.json())
            .then(res => setCart(res))
            .catch(err => console.log(err))
        // dispatch(cart_get());
    }
    useEffect(() => {
        getData();

    }, [])
    const handleremove = (e) => {
     
        let id = e.target.id;
        // console.log("The id is",id);
        fetch(`http://localhost:8080/cart/${id}`, {
            method: "DELETE",
        }).then((res) => res.json())
            .then(res => {
                alert("Delete Item succesfully");
                window.location.reload();
                console.log(res)
            })
            .catch(err => console.log(err))
    }
    return (
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
                            <Button variant="contained" color="secondary" id={e.id}
                                onClick={handleremove}
                            >DELETE</Button>
                            {/* <button id={e.id} onClick={handleremove}>DELETE</button> */}
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}