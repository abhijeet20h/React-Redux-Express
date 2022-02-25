import React, { useState } from "react";
import "./Login.css";

import { login, logout } from "../features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [yname, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
     alert("Please Conform" )
    e.preventDefault();

    dispatch(
      login({
        name: yname,
        email: email,
        loggedIn: true,
      })
    );
    console.log("name is", yname)
    setEmail("");
    setName("");
    
  };
  

  return (

    <div className="login sec">    

      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="name"
          placeholder="Name"
          value={yname}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <button type="submit" className="submit__btn" >
          Submit
        </button>
      </form>

    
    </div>
  );
};

export default Login;
