import  React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import { Link, Router, Switch } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => (
            <div >
                <AppBar  position="static" color="default">
                    <Tabs className="navbar">
                        <Typography variant="h6" color="inherit">
                            <Tab to="/" label="MO:" />
                            <Tab to="/projects" label="Projects" />
                            <Tab to="/contact" label="Contact" />
                            <Tab to="/resume" label="Resume" />
                            <Tab to="/skills" label="Skills" />
                        </Typography>
                    </Tabs>
                </AppBar>
            </div>
        );

export default NavBar;