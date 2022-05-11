import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./css/product.css";
import { useNavigate } from "react-router-dom";

export const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const { isAuth } = useSelector((state) => state.login);
  console.log(isAuth);

  return (
    <div>
      {product
        .filter((e) => e.id == id)
        .map((e) => (
          <div id="product_info">
            <div>
              <img src={e.image} alt="" />
              <h4>Rating:{e.rating.rate}</h4>
              <h4>Count:{e.rating.count}</h4>
            </div>
            <div id="TDPA">
              <h4>Title:{e.title}</h4>
              <p>
                <b>Description</b>:{e.description}
              </p>
              <h4>Price:{e.price}₹</h4>
              <button
                onClick={() => {
                  if (isAuth) alert("Product addded");
                  else {
                    alert("Login before added in the cart");
                    navigate("/login");
                  }
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
