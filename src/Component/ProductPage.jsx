import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './css/product.css';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { cart_add } from "../Redux/Cart/action";
import Box from "@material-ui/core/Box";
import { Rating } from "@mui/material";
// import StarIcon from '@mui/icons-material/Star';


export const ProductPage = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { product } = useSelector((state) => state.product);
    const { isAuth } = useSelector((state) => state.login);
    const state = useSelector(state => state);
    const dispatch = useDispatch();


    const getLabelText = () => {
        return "Rating"
    }
    return (
        <div>
            {product.filter(e => e.id == id).map(e => (
                <div id="product_info">
                    <div>
                        <img src={e.image} alt="" />
                        <Box sx={{
                            width: 500,
                            alignItems: 'center',
                            border: '1px solid black',
                            display: 'flex'
                        }}
                        >
                            <Rating
                                name="Rating"
                                getLabelText={getLabelText}
                                value={e.rating.rate}
                                precision={0.5}
                                readOnly={true}
                            />
                        </Box>



                    </div>
                    <div id="TDPA">
                        <h4>Title:{e.title}</h4>
                        <p><b>Description</b>:{e.description}</p>
                        <h4>Price:{e.price}₹</h4>
                        <Button variant="contained" color="secondary"
                            onClick={() => {
                                if (true) {
                                    alert("Added succesfully in the cart...");
                                    dispatch(cart_add(e));
                                }
                                else {
                                    alert("Please login first..");
                                    navigate('/login');
                                }

                            }}
                        >
                            ADD TO CART
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}