import React from 'react'
import {Link} from "react-router-dom";
import {AppBar, Toolbar,Typography} from "@mui/material";
export const NavBar = () => {
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" >
        <Link to="/">Todo App</Link>  
        </Typography>
      </Toolbar>
    </AppBar>
    </>
  )
}
