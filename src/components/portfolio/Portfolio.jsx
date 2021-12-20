import "./portfolio.scss";

import {Projects} from "../../projects.js";

export default function portfolio() {

    return (
        <div className="portfolio" id ="portfolio">
            <h1>Portfolio</h1>
            

            <div className="container">
                {(Projects || []).map((d) => (
                <div className="item">
                    <img src = {d.img} alt =" "/>
                    <div className="description">
                        <div className="text">
                            <h3>{d.title}</h3>
                            <p>{d.desc}</p>
                        </div>
                        <div className="technologies">
                            
                            {(d.tech|| []).map((t) => (
                            <p> {t}</p>
                            ))}
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
