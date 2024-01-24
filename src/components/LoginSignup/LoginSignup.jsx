import React, { useState } from "react";
import './LoginSignup.css'
import Particules from "../Pages/ParticulesBg";
import Name from "../Assets/user.png";
import Mail from "../Assets/email.png";
import Password from "../Assets/padlock.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const LoginSignup = () => {


    const [action, setAction] = useState("Login");
    const navigate = useNavigate();
    function handleClick() {
        navigate('./Tasker')
    }

    return (


        <div className="container">
            <Particules />
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={Name} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}

                <div className="input">
                    <img src={Mail} alt="" />
                    <input type="mail" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={Password} alt="" />
                    <input type="password" placeholder="Password" />
                </div>

            </div >
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here</span></div>
            }

            <Link to="/Tasker"> <button className="bton-next-page ">{action}</button></Link>

        </div>


    )
}

export default LoginSignup