import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

    const handleRegister = async (e) => {
      e.preventDefault();
      if(passwordAgain.current.value !== password.current.value){
        password.current.setCustomValidity("Password don't match")
      } else {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        }
        try {
           await axios.post("http://localhost:5000/api/auth/register", user)
           navigate('/login')
        } catch (error) {
          console.log(error);
        }

      }
    }


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LR Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleRegister} >
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              type="email"
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              required
              type="password"
              ref={password}
              minLength="6"
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              required
              minLength="6"
              type="password"
              ref={passwordAgain}
              className="loginInput"
            />
            <button className="loginButton" type="submit" >Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};
