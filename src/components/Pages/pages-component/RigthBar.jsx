import React from "react";
import '../Tasker.css'
import { Box } from "@mui/material";
import Joueur from '../../Assets/reuniontech.jpg'
import logoMy from "../../Assets/img-slides/logo.jpg"




const RigthBar = () => {

    return (

        <Box width={300} sx={{
            display: {
                xs: "none", sm: "block"
            },

        }}  >
            <div className="first-div">

                <img className="img-pub" src={logoMy} />


                <img className="Container" src={Joueur} />


            </div>
        </Box>

    )
}

export default RigthBar