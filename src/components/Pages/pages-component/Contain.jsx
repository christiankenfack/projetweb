import React from "react";
import "../../../style/SideBar.css"
import { Box } from "@mui/material";
import reunion from "../../Assets/reuniontech.jpg"





const Contain = () => {

    return (

        <Box width={400} >
            <div className="back-contain" >
                <img className="Container" src={reunion} alt="" />
            </div>

        </Box>


    )
}

export default Contain