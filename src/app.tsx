import React, { useEffect } from 'react'
import { Button } from './Button'
import { Timer } from './Timer'
import { useState } from 'react'


const App: React.FC = () => {

    const Phases = ["Click to Start", "Stop", "Reset"]

    const [phase, setPhase] = useState(0)
    const [time, setTime] = useState(0)
    const [intervalID, setIntervalID] = useState(null)
    
    const startTimer = () => {
        setIntervalID(
            setInterval(() => setTime(t => t + 0.1), 100))
    }

    useEffect(() => {

        if (phase == 0) {
            setTime(0)
        } else if (phase == 1) {
            startTimer()
        } else if (phase == 2) {
            return clearInterval(intervalID)
        }
    }, [phase])
    
    const incrementPhase = () => {
        // mod 3 because there are three phases
        setPhase(phase => (phase + 1) % 3)
    }

    return (
        <div>
            <Timer time={time} />
            <Button phase={Phases[phase]} f={incrementPhase} />
        </div>
    )
}

export default App;