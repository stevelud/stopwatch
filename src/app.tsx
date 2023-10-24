import React from 'react'
import { Button } from './Button'
import { Timer } from './Timer'
import { useState } from 'react'


export const App: React.FC = () => {

    const Phases = ["Click to Start", "Stop", "Reset"]
    let n: number = 0;
    let intervalID = null;

    const [phase, setPhase] = useState(Phases[n])
    const [time, setTime] = useState(0)

    const incrementPhase = () => {
        // There are three phases that go through a cycle
        setPhase(Phases[n++ % 3])
    }

    const incrementTimer = () => {
        // Updating state just by intervals of 1 tenth of a second
        setTime(time + 0.1)
    }

    const setButtonFunction = () => {
        if (phase === Phases[0]) return startTimer
        if (phase === Phases[1]) return stopTimer
        if (phase === Phases[2]) return resetTimer
        else return null
    }

    const startTimer = () => {
        intervalID = setInterval(incrementTimer, 100)
        incrementPhase()
    }

    const stopTimer = () => {
        clearInterval(intervalID)
        incrementPhase()
    }

    const resetTimer = () => {
        setTime(0)
        incrementPhase()
    }

    return (
        <div>
            <Timer time={time} />
            <Button phase={phase} f={setButtonFunction()} />
        </div>
    )
}