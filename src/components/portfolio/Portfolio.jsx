import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {JavaProjects,PythonProjects,Reactprojects} from "../../projects.js";

export default function portfolio() {
    const [selected, setSelected] = useState("React");
    const [data, setData] = useState([]);

    const list = [
        {
            id : "React",
            title: "React",
        },
        {
            id : "Java",
            title: "Java",
        },
        {
            id : "Python",
            title: "Python",
        },
        
    ];

    useEffect(()=>{
        switch (selected) {
            case "React" :
                setData(Reactprojects);
                break;
            case "Java" : 
                setData(JavaProjects);
                break;
            case "Python" :
                setData(PythonProjects);
                break;
            default : 
                setData(JavaProjects);
        }

    }, [selected]
    )
    return (
        <div className="portfolio" id ="portfolio">
            <h1>Portfolio</h1>
            <ul>
               {list.map((item)=>
                   <PortfolioList title={item.title}
                   active = {selected == item.id}
                   setSelected = {setSelected}
                   id = {item.id}/>
               )}
            </ul>

            <div className="container">
                {(data || []).map((d) => (
                <div className="item">
                    <img src = {d.img} alt =" "/>
                    <div className="description">
                        <div className="text">
                            <h3>{d.title}</h3>
                            <p>{d.desc}</p>
                        </div>
                        <div className="button">
                            <a href = {d.github} target = "_blank"><button> Show code </button></a>
                        </div>
                        
                    </div>
                </div>
                ))}
                 
            </div>
            
        </div>
    )
}
