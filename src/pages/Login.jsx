import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate()
  const {login, user} = useUser()

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = () =>{
    login(username,password).then(res => {
      if(res === true){
        navigate('/')
      }else{
        setErrorMessage('error')
      }
    })
  }
  
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        {errorMessage != '' && <div className="alert alert-danger">Username or password not correct</div>}
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value = {username}
                  onChange={e=>setUsername(e.target.value)}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value = {password}
                  onChange={e=>setPassword(e.target.value)}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="button" onClick={()=>handleSubmit()}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
