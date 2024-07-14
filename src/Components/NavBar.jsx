import {useState,useEffect} from 'react';
import './navbar.css';

export function NavBar({display}) {
    const step = [1,2,3,4];
    let position = 0;

    display.forEach((element, index) => {
        if (element.state) {
            position = index;
        }
    })
    
   console.log(position)

   const style = {
    'backgroundColor': 'hsl(206, 94%, 87%)',
    'color': 'black'
}

    const steps = step.map(
        (data, index) => {
           
            return (
                <div key = {data} className='step' style={(position==index) ? style: null}>
                    {data}
                </div>
            )
        }
    )

    return (
        <div className="nav-bar">
            <div className="steps">
                {steps}    
            </div>
        </div>
    )
}