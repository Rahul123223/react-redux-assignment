import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./css/product.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { cart_add } from "../Redux/Cart/action";
import Box from "@material-ui/core/Box";
import { Rating } from "@mui/material";
import StarIcon from "@material-ui/icons/Star";
import { ToastContainer, toast } from "react-toastify";

export const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const { isAuth } = useSelector((state) => state.login);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const getLabelText = () => {
    return "Rating";
  };
  return (
    <div>
      {product
        .filter((e) => e._id == id)
        .map((e) => (
          <div id="product_info">
            <div>
              <img src={e.image} alt="" />
              <Box
                sx={{
                  width: 500,
                  alignItems: "center",
                  // border: "1px solid black",
                  display: "flex",
                }}
              >
                <Rating
                  name="Rating"
                  getLabelText={getLabelText}
                  value={e.rating.rate}
                  precision={0.5}
                  readOnly={true}
                  emptyIcon={
                    <StarIcon
                      sx={{ opacity: 0.9, alignItems: "center" }}
                      fontSize="inherit"
                    />
                  }
                />
              </Box>
            </div>
            <div id="TDPA">
              <h4>Title:{e.title}</h4>
              <p>
                <b>Description</b>:{e.description}
              </p>
              <h4>Price:{e.price}₹</h4>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  if (isAuth == true) {
                    toast.success("Added succesfully in the cart...");
                    dispatch(cart_add(e));
                  } else {
                    toast.error("Please login first..", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                    navigate("/login");
                  }
                }}
              >
                ADD TO CART
              </Button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </div>
        ))}
    </div>
  );
};
