import { Box, Fab, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { AllInbox, BarChart, Circle, ExpandLess, ExpandMore, PlaylistAdd, Portrait, Reddit } from "@mui/icons-material";
import styled from "@emotion/styled";
import Logo from "../../Assets/log2-1.png"
import "../../../style/SideBar.css"
import { Link } from 'react-router-dom';


const UserBox = styled(Box)(({ }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center"
}));



const SlideBar = () => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{
            display: {
                xs: "none", sm: "block"
            },

        }} >
            <style>
                {`
          a {
            text-decoration: none;
            color: inherit;
          }
        `}
            </style>
            <div className="Sidebar">
                <List sx={{ color: "white" }}>
                    <Link to="/Tasker" > <img className="Logo" src={Logo} alt="Logo" /></Link>
                    <Link to="/Profile" >
                        <ListItem disablePadding>

                            <ListItemButton component='a'

                                sx={{
                                    '&:hover, &:focus': {
                                        bgcolor: '#5e17eb48'
                                    }
                                }}>


                                <UserBox>
                                    <ListItemIcon sx={{ color: "#5E17EB" }}>
                                        <Portrait />
                                    </ListItemIcon>
                                    <ListItemText primary="Profil" />
                                </UserBox>

                            </ListItemButton>

                        </ListItem>
                    </Link>

                    <Link to="/Tasks">
                        <ListItem disablePadding>
                            <ListItemButton component='a' href="#home"

                                sx={{
                                    '&:hover, &:focus': {
                                        bgcolor: '#5e17eb48'
                                    }
                                }}>
                                <ListItemIcon sx={{ color: "#5E17EB" }}>
                                    <PlaylistAdd sx={{ fontSize: 32 }} />
                                </ListItemIcon>
                                <ListItemText primary="Tasks" />

                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="/MyProjects">
                        <ListItem disablePadding>
                            <ListItemButton onClick={handleClick}
                                sx={{
                                    '&:hover': {
                                        bgcolor: '#5e17eb48'
                                    }
                                }}>
                                <ListItemIcon sx={{ color: "#5E17EB" }}>
                                    <AllInbox />
                                </ListItemIcon>
                                <ListItemText primary="My Projects" />

                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/Repport">
                        <ListItem disablePadding>
                            <ListItemButton component='a' href="#home"

                                sx={{
                                    '&:hover, &:focus': {
                                        bgcolor: '#5e17eb48'
                                    }
                                }}>
                                <ListItemIcon sx={{ color: "#5E17EB" }}>
                                    <BarChart />
                                </ListItemIcon>
                                <ListItemText primary=" Report" />
                            </ListItemButton>
                        </ListItem>
                    </Link>


                </List>

            </div>

        </Box >

    )
}

export default SlideBar
//5E17EB