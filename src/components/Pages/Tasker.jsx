import React from "react";
import "./Tasker.css"
import SideBar from "./pages-component/SideBar"
import { Stack } from "@mui/material";
import Contain from "./pages-component/Contain";
import RigthBar from "./pages-component/RigthBar";


const Tasker = () => {
    return (
        <div>
            <Stack direction="row" spacing={1} justifyContent="space-between">
                <SideBar />
                <Contain />

            </Stack>
        </div>
    )
}

export default Tasker