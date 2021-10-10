import { useState } from "react";
import "./contact.scss"

export default function contact() {

    const[message, setMessage] = useState(false);

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className = "Contact" id ="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />

            </div>
            <div className="right">
                <h2>Contact me</h2>
                <form onSubmit = {handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder ="Message">
                    

                    </textarea>
                    <button type = "submit"> Send</button>
                    {message && <span> Thank you for your message ! </span>}
                </form>
            </div>

        </div>
    )
}