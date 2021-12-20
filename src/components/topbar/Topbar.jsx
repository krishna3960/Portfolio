import "./Topbar.scss"
import {Person, Mail} from "@material-ui/icons";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from "react";

export default function Topbar({menuOpen, setMenuOpen}) {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                <a href = "#intro" className ="logo">Home</a>
                <div className="itemcontainer">
                   <Person className="icon"/> 
                   <span>+41 79 575 13 98</span>
                </div>
                <div className="itemcontainer">
                   <Mail classname="icon"/> 
                   <span>krishna.lemoing@unifr.ch</span>
                </div>
               
                <div className="itemcontainer">
                <a href="https://github.com/krishna3960" target="_blank">
                   <GitHubIcon classname="icon"/> 
                   <span>GitHub</span>
                   </a>
                </div>
               
                <div className="itemcontainer">
                    <a href="https://www.linkedin.com/in/krishna-le-moing/" target="_blank">
                   <LinkedInIcon classname="icon"/> 
                   <span>LinkedIn</span>
                   </a>
                </div>
                
                </div>
                
              
                <div className="right">
                <div className="hamburger" onClick = {()=>setMenuOpen(!menuOpen)}>
                    <span className ="line1"></span>
                    <span className ="line2"></span>
                    <span className ="line3"></span>
                </div>
                </div>
            </div>
            
        </div>
    )
}
