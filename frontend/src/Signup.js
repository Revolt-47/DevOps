import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(){
    
    let [name,setname] = useState("")
    let [password,setpassword] = useState("")
    let [email,setemail] = useState("")

    const handleemail = (e) =>{
        setemail(e.target.value);
        console.log(email);
    }

    const handlepass = (e) =>{
        setpassword(e.target.value);
        console.log(password)
    }

    const handlename = (e) =>{
        setname(e.target.value);
        console.log(name)
    }

    const navigate = useNavigate();

    

    const changeAuthMode = () => {
      navigate('/')
    }

    return(
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                value = {name}
                onChange={handlename}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={handleemail}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={handlepass}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onSubmit={changeAuthMode}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
}