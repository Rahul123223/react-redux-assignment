import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/login.css";
import {
  login_loading,
  login_success,
  login_failure,
} from "../Redux/Login/action";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(username, password);
    const useDetails = {
      username,
      password,
    };
    dispatch(login_loading());
    fetch(`https://rg-ccommerce-app-heroku.herokuapp.com/login`, {
      method: "POST",
      body: JSON.stringify(useDetails),
      headers: {
        "Content-type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("The res is", res);
        dispatch(login_success(res.token));
        navigate("/");
      })
      .catch((err) => dispatch(login_failure()));
  };
  return (
    <>
      <div className="login">
        <h1>Login Here...</h1>
        <input
          type="text"
          placeholder="Enter the useraname..."
          onChange={(e) => setUser(e.target.value)}
          value={username}
          className="ip_tags"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter the password"
          onChange={(e) => setPass(e.target.value)}
          value={password}
          className="ip_tags"
        />{" "}
        <br />
        <button className="ip_tags" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};
