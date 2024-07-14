import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PersonalInfo } from './Components/PersonalInfo';
import { NavBar } from './Components/NavBar';
import { Plans } from './Components/Plans';
import { Button } from './Components/Button';


function App() {

  const [display, setDisplay] = useState(
    [
       {
        "state": true,
        "component": <PersonalInfo />
      },
      {
        "state":false,
        "component": <Plans />
      }
    ]
  )

  const component = display.map(
    data => {
      return data.state ? data.component : null;
    }
  )

  function changeState(event) {

    const {name} = event.target;

    setDisplay(
        prevData => {
         for (let i = 0; i < prevData.length; i++) {
          if (prevData[i].state) {
            prevData[i].state = false;
            if (name == 'next') {
              prevData[i+1].state = true;
            } else {
              if (name == 'go-back') {
                prevData[i-1].state = true;
              }
            }
            return [...prevData];
          }
         }
        }
      )
  }

  return (
   <div className='app'>
    <NavBar display={display}/>
    {component}
    <Button 
     handleNext = {changeState}
    />
   </div>
  )
}

export default App
