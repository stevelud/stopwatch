import React, { useEffect } from 'react'
import { Button } from './Button'
import { Timer } from './Timer'
import { useState } from 'react'
import './App.css'

const App: React.FC = () => {

    const [phase, setPhase] = useState(0)
    const [time, setTime] = useState(0)
    const [intervalID, setIntervalID] = useState(null)
    
    //let intervalid;

    const startTimer = () => {
        incrementPhase()
        setIntervalID(setInterval(() => setTime(t => t + 0.1), 100))
        //intervalid = setInterval(() => setTime(t => t + 0.1), 100);
    }

    const stopTimer = () => {
        incrementPhase()
        clearInterval(intervalID)
    }

    const reset = () => {
        incrementPhase()
        setTime(0)
    }

    const PhaseFunctions = {
        '0': startTimer,
        '1': stopTimer,
        '2': reset
    };

    const Phases = [ { fn: startTimer, phrase: "Click to Start" }, 
                     { fn: stopTimer, phrase: "Stop" }, 
                     { fn: reset, phrase: "Reset"} 
                    ]
    
    const incrementPhase = () => {
        // mod 3 because there are three phases
        setPhase(phase => (phase + 1) % 3)
    }

    return (
        <div className="App" >
            <Timer time={time} />
            <Button f={Phases[phase].fn} phase={Phases[phase].phrase} />
        </div>
    )
}

export default App;