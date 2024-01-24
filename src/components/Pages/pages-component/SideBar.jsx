import { Box, Fab, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { AllInbox, BarChart, Circle, ExpandLess, ExpandMore, PlaylistAdd, Portrait } from "@mui/icons-material";
import Collapse from '@mui/material/Collapse';
import { Add as AddIcon } from "@mui/icons-material"
import styled from "@emotion/styled";
import Logo from "../../Assets/log2-1.png"
import "../Tasker.css"
import { Link } from 'react-router-dom';


const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center"
}));



const SlideBar = (props) => {

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
                    <img className="Logo" src={Logo} alt="Logo" />
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
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>


                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{
                                pl: 4, '&:hover, &:focus': {
                                    bgcolor: '#5e17eb48'
                                }
                            }}>
                                <ListItemIcon sx={{
                                    color: "#5e17eb48"

                                }}>
                                    <Circle sx={{ fontSize: 15 }} />
                                </ListItemIcon>
                                <ListItemText primary="Projet 1" />
                            </ListItemButton>
                        </List>
                    </Collapse>

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
                <Link to="/Project">
                    <Tooltip title={props.title}
                        sx={{
                            position: "fixed",
                            left: { xs: "calc(20% - 15px)", md: 30 },
                            marginLeft: -2,
                            height: 35,
                            width: 35,
                            bgcolor: '#5e17eb48',
                            bottom: 20,
                            '&:hover': {
                                bgcolor: "#5E17EB"

                            }
                        }}>

                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </Link>
            </div>

        </Box >

    )
}

export default SlideBar
//5E17EB