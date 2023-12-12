import React from "react";
import './LoginPage.css';
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div className="Login">
      <div className="facebook">
        <div className="facebookLogo">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" />
        </div>
        <span className="title">
         Connect with friends and the world 
          <br></br><span className="title">around you on Facebook. </span>
        </span>
      </div>
      <div className="LoginContainer">
       
          <input type="email" placeholder="Email address or Phone Number" />
          <br></br>
          <input type="Password" placeholder="Password" />
          <br></br>
          <button className="btn">
            <Link to="/HeaderArea"><b>Log in</b></Link>
          </button>
      
        <div className="forget">
          <a href="forget">Forgotten account?</a>
          <div className="LoginIndetails"> </div>
        </div>
        <div className="create">
          <br></br>
          <button className="btns">
            Create New Account
          </button>
        </div>
        <p></p>
        <br></br>
        <div className="page">
          <a href="createpage"><b>Create a Page</b> </a> for a celebrity, band or business.
        </div>
      </div>

    </div>
  )

}

export default LoginPage;