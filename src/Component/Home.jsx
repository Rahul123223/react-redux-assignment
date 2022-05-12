import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { getProductData } from "../Redux/product/action";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import './css/Home.css'
import Button from "@mui/material/Button";

export const Home = () => {
    // const [data,setData]=useState([])
    const { product } = useSelector((state) => state.product);
    const catogery = ["men's clothing", "jewelery", "electronics", "women's clothing"]
    const [sort, changeSort] = useState('asc');
    const [filter, changeFilter] = useState('price');
    const [cat, category] = useState('')

    console.log("the product is", product)

    const dispatch = useDispatch();
    const fetchData = () => {
        dispatch(getProductData(sort, filter, cat));
    }
    useEffect(() => {
        fetchData();

    }, [sort, cat])
    const handleSort = (e) => {
        changeSort(e.target.value);

    }
    const handleFilter = (e) => {
        console.log(e.target.value);

        category(e.target.value);

    }

    return (
        <>
            <div id="container">
                <div id="catogery">
                    <h4>Catogery</h4>
                    {catogery.map((e) => (
                        <div>{e}</div>

                    ))}
                    <hr />
                    <div id="sort">
                        <h4>Sort by price</h4>
                        <Button variant="contained" color="secondary" value='asc'
                        onClick={handleSort}
                        >Low to High</Button> <br />
                        <Button variant="contained" color="secondary" value='desc' 
                        onClick={handleSort}
                        > High to Low</Button>


                        {/* <button onClick={handleSort} value='asc'>Low to High</button>
                        <button onClick={handleSort} value='desc'>High to Low</button> */}
                    </div>
                    <hr />
                    <div id="filter">
                        <h4>Filter By</h4>
                        <select name="" id="" onChange={handleFilter}>
                            <option value="">All</option>
                            <option value="women's clothing">Women</option>
                            <option value="men's clothing">Men</option>
                            <option value="electronics">Electonics</option>
                            <option value="jewelery">Jewelery</option>

                        </select>
                    </div>
                </div>
                <div id="show_product">
                    {product.map((e) => (
                        <div key={e.id}>
                            <img src={e.image} alt="" />
                            <h4>Title:{e.title}</h4>
                            <h4>Price:{e.price}</h4>
                            <div>Category:{e.category}₹</div>
                            <Link to={`/product-page/${e.id}`}>know More...</Link>

                        </div>
                    ))}
                </div>
                <hr />


            </div>
        </>

    )
}