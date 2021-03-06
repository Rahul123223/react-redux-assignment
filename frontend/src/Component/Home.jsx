import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProductData } from "../Redux/product/action";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import "./css/Home.css";
import Button from "@mui/material/Button";
import { Box } from "@material-ui/core";
import { Pagination } from "@mui/material";
import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import {Slider} from "./Slider";

export const Home = () => {
  
  const { product } = useSelector((state) => state.product);
  console.log("The product is", product);
  const catogery = [
    { value: "men's clothing", type: "Men" },
    { value: "jewelery", type: "Jewellary" },
    { value: "electronics", type: "Electronics" },
    { value: "women's clothing", type: "Women" },
  ];
  const [sort, changeSort] = useState(1);
  const [cat, category] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getProductData(sort, cat, page));
  };
  useEffect(() => {
    fetchData();
  }, [sort, cat, page]);
  console.log("The page is", page);
  const handleSort = (e) => {
    changeSort(e.target.value);
  };
  const handleFilter = (e) => {
    console.log(e.target.value);
    category(e.target.value);
  };
  const handlePage = (e, value) => {
    setPage(value);
  };

  return (
    <>
    <div id="slider">
      <Slider></Slider>
    </div>
      <div id="container">
        <div id="catogery">
          <h4>Catogery</h4>
          {catogery.map((e) => (
            <>
              <div id="cat_two">
                <Link
                  style={{
                    textDecoration: "none",
                    margin: 2,
                    color: "black",
                    fontSize: 17,
                    marginLeft: 15,
                    fontFamily:
                      " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
                  }}
                  to={`/category/${e.value}`}
                >
                  {e.type}
                </Link>
              </div>
            </>
          ))}
          <hr />
          <div id="sort">
            <InputLabel sx={{ margin: 2.7 }}>Sort By</InputLabel>
            <Button
              variant="contained"
              color="secondary"
              value={1}
              sx={{ margin: 1 }}
              onClick={handleSort}
            >
              Low to High
            </Button>{" "}
            <br />
            <Button
              variant="contained"
              color="secondary"
              value={-1}
              sx={{ margin: 1 }}
              onClick={handleSort}
            >
              {" "}
              High to Low
            </Button>
          </div>
          <hr />
          <div id="filter">
            <Box sx={{ minWidth: 80 }}>
              <FormControl fullWidth color="secondary">
                <InputLabel>Filter By</InputLabel>
                <Select onChange={handleFilter}>
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
              <Link to={`/product-page/${e._id}`}>
                <img src={e.image} alt="" />
              </Link>
              <h4>Title:{e.title}</h4>
              <h4>Price:{e.price}???</h4>
              <h5>Category:{e.category}</h5>
              <Link to={`/product-page/${e._id}`}>More Details..</Link>
            </div>
          ))}
        </div>
        <hr />
        <div id="paginate">
          <Stack spacing={2}>
            <Pagination
              count={5}
              color="secondary"
              size="large"
              onChange={handlePage}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};