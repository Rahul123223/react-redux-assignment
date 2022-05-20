import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { getProductData } from "../Redux/product/action";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import './css/Home.css'
import Button from "@mui/material/Button";
import { Box } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { Stack, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";


//so here instead of writing all the action creator in here we simply write all these thing into the same file
//and just export that particular file but for doing this we need the middlware so in here we are gone be using the
//redux-thunks as the mw
export const Home = () => {
    // const [data,setData]=useState([])
    const { product } = useSelector((state) => state.product);
    console.log("The product is",product);
    const catogery = [
        { value: "men's clothing", type: "Men" },
        { value: "jewelery", type: "Women" },
        { value: "electronics", type: "Electronics" },
        { value: "women's clothing", type: "Women" }
    ]
    const [sort, changeSort] = useState(1);
    // const [filter, changeFilter] = useState('price');
    const [cat, category] = useState('')
    const [page, setPage] = useState(1);
    // const [limit, setLimit] = useState(6);

    // console.log("the product is", product)
    // console.log( JSON.stringify(product));

    const dispatch = useDispatch();
    const fetchData = () => {
        dispatch(getProductData(sort,cat, page));
    }
    useEffect(() => {
        fetchData();

    }, [sort, cat, page])
    console.log("The page is", page);
    const handleSort = (e) => {
        // console.log(e.target.value);
        changeSort(e.target.value);

    }
    const handleFilter = (e) => {
        console.log(e.target.value);
        category(e.target.value);
    }
    const handlePage = (e, value) => {
        // console.log("The value and e is",e,value)
        setPage(value);
    }

    return (
        <>
            <div id="container">
                <div id="catogery">
                    <h4>Catogery</h4>
                    {catogery.map((e) => (
                        <>
                            <div id="cat_two">
                                <Link
                                    style={{
                                        textDecoration: "none", margin: 2,
                                        color: "black", fontSize: 17, marginLeft: 15, fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
                                    }}
                                    to={`/category/${e.value}`}>{e.type}</Link>
                            </div>
                        </>
                    ))}
                    <hr />
                    <div id="sort">
                        <InputLabel sx={{ margin: 2.7 }}>Sort By</InputLabel>

                        <Button variant="contained" color="secondary" value={1}
                            sx={{ margin: 1 }} onClick={handleSort}
                        >Low to High</Button> <br />
                        <Button variant="contained" color="secondary" value={-1}
                            sx={{ margin: 1 }} onClick={handleSort}
                        > High to Low</Button>

                        {/* <button onClick={handleSort} value='asc'>Low to High</button>
                        <button onClick={handleSort} value='desc'>High to Low</button> */}
                    </div>
                    <hr />
                    <div id="filter">
                        {/* <h4>Filter By</h4>
                        <select name="" id="" onChange={handleFilter}>
                            <option value="">All</option>
                            <option value="women's clothing">Women</option>
                            <option value="men's clothing">Men</option>
                            <option value="electronics">Electonics</option>
                            <option value="jewelery">Jewelery</option>

                        </select> */}
                        <Box sx={{ minWidth: 80 }} >
                            <FormControl fullWidth color="secondary">
                                <InputLabel>Filter By</InputLabel>
                                <Select
                                    onChange={handleFilter}
                                >
                                    <MenuItem value={""}>All</MenuItem>
                                    <MenuItem value={"women's clothing"}>Women</MenuItem>
                                    <MenuItem value={"men's clothing"}>Men</MenuItem>
                                    <MenuItem value={"electronics"}>Electronic</MenuItem>
                                    <MenuItem value={"jewelery"}>Jewelery</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div id="show_product">
                    {product.map((e) => (
                        <div key={e._id}>
                            <img src={e.image} alt="" />
                            <h4>Title:{e.title}</h4>
                            <h4>Price:{e.price}₹</h4>
                            <h5>Category:{e.category}</h5>
                            <Link to={`/product-page/${e._id}`}>know More...</Link>

                        </div>
                    ))}
                </div>
                <hr />
                <div id="paginate">
                    <Stack spacing={2}>
                        <Pagination count={5} color="secondary" size="large" onChange={handlePage} />
                    </Stack>
                </div>
            </div>
        </>
    )
}