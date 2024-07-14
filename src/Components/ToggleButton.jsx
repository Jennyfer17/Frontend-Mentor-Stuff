import { useState } from "react";
import './toggle-button.css';

export function ToggleButton() {
    const [toggled, setToggled] = useState(false);

    function handleClick() {
        setToggled(prevData=>!prevData)
    }
   
    return (
        <button className="toggle-button" onClick={handleClick} >
            <div className="circle" id={`circle--${toggled?'right':'left'}`}>j</div>
        </button>
    )
}