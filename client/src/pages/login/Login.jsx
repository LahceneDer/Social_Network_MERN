import { CircularProgress } from "@material-ui/core";
import { useContext, useRef } from "react";
import { loginCall } from "../../ApiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, user, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LR Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <form className="loginRight" onSubmit={handleSubmit}>
          <div className="loginBox">
            <input
              placeholder="Email"
              required
              ref={email}
              type="email"
              className="loginInput"
            />
            <input
              placeholder="Password"
              required
              minLength="6"
              ref={password}
              type="password"
              className="loginInput"
            />
            <button className="loginButton"> {isFetching ? <CircularProgress color="white" size="25px" /> : "Login"} </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
