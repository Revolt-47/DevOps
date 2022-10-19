import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
   

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

    const navigate = useNavigate();

    

    const changeAuthMode = () => {
      navigate('signup')
    }
   
    return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter emai"
                  value={email}
                  onChange={handleemail}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlepass}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" >
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