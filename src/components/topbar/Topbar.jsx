import "./Topbar.scss"
import {Person, Mail} from "@material-ui/icons";
import Switch from '@material-ui/core/Switch';
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
                   <span>krishna.lemoing@yahoo.com</span>
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
