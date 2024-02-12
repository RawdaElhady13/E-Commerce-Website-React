import React from "react";
import './css/loginsignup.css';
export default function LoginSignup(){
    return(
    <div className="loginsignup">
        <div className="loginsignup-container">
            <h1>Sign UP</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                </div>
                  <div>
                    <button>Continue</button>
                    <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
                </div>
                <div className="loginsignup-agree">
                    <input  type="checkbox" id="" name=""/>
                    <p>By continuing, I agree the terms of use & privacy policy. </p>
                </div>
            
        </div>

    </div>);
}