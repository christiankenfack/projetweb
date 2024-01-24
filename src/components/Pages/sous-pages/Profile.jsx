import React, { useState } from "react";
import SideBar from "../pages-component/SideBar";
import { Link } from "react-router-dom";






const Profile = () => {



    return (

        <>
            <SideBar />


            <div className="Info-profil">
                <div className="username">
                    <div className="U-name"><p>Username :</p></div>
                    <div className="user-name-contain"><p className="user-name">Kylie jenner</p></div>
                </div>
                <div className="username">
                    <div className="U-name"><p>E-Mail :</p></div>
                    <div className="user-name-contain"><p className="user-name">Kyliejenner12@gmail.com</p></div>
                </div>
                <Link to="/"> <button className="Log-out">Log Out</button></Link>
            </div>
        </>
    )
}

export default Profile