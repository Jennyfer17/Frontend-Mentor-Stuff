import { useState } from "react";
import { ToggleButton } from "./ToggleButton";

export function Plans() {

    const [selectedOption, setSelectedOption] = useState();

    const [plan, setPlan] = useState([
        {
            'plan': 'Arcade',
            'price': 9,
            'checked': false
        },
        {
            'plan': 'Advanced',
            'price': 12,
            'checked': false
        },
        {
            'plan': 'Pro',
            'price': 15,
            'checked': false
        }
    ])

    const style = {
        'backgroundColor': 'red'
    }
    const planComponent = plan.map(data => {
        return (
            <div className="plan" key={data.plan} style={data.checked ? style : null}>
                <input type="radio"
                id={data.plan} 
                name={data.plan}
                checked = {selectedOption == data.plan}
                onChange={handleChange}
            />
                <label htmlFor={data.plan}>
                <span>{data.plan}</span> <br/>
                <span>${data.price}/mo</span>
                </label> <br/>
            </div>
        )
    })

    function handleChange(event) {
        const {name} = event.target;

        setSelectedOption(name)
        setPlan(
            prevData => {
                prevData.forEach(
                    (element) => {
                        if (element.plan == name) {
                            element.checked = true
                        } else 
                        {element.checked = false}
                    }
                )
                return [...prevData]
            }
        )
    }

    return (
        <div className="container">
            <h2>Select your plan</h2>
            <p>You have the option of monthly <br/> or yearly billing.</p>

            {planComponent}
            <div className="div--toggle-button">
                <span>Monthly</span>
                <ToggleButton/>
                <span>Yearly</span>
            </div>

        </div>
    )
}
