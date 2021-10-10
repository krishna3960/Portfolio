import "./intro.scss";
import {init} from "ityped"
import { useEffect, useRef } from "react";

export default function intro() {

    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor : true,
            strings : ["Java", "Python", "HTML", "CSS", "JavaScript", "React"],
            typeSpeed : 100, 
            backDelay : 1500,
            backSpeed : 60
        })

    }, [])
    return (
        <div className="intro" id ="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/krishnaImage.jpeg"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, my name is</h2>
                    <h1>Krishna le moing</h1>
                    <h3>I am a Computer Science Student</h3>
                    <h3>I have experience working with</h3>
                    <h3>these technologies : <span ref ={textRef}></span></h3>
                </div>
                <a href ="#portfolio"> 
                <img src ="assets/down.png"/></a>

            </div>
        </div>
    )
}
