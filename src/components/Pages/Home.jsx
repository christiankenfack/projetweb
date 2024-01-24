import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import ParticulesBg from "./ParticulesBg";
import logo from "../Assets/log2-1.png";


const Button = () => {
    /*const navigate = useNavigate();
    function handleClick() {
        navigate('./Tasker')
    }*/


    return (
        <div id="vanta" >
            <ParticulesBg />
            <a href="#"><img className="logo" src={logo} alt="Logo" /></a>
            <div className="Title-script">
                <h1>
                    <span className="welcome">WELCOME TO</span><br />
                    <span className="devtasker-word">DEVTASKER</span>

                </h1>

            </div>

            <Link to="/Login">
                <button className="button-connect" /*onClick={handleClick}*/>
                    se connecter
                </button>
            </Link>
        </div>

    )
}


export default Button