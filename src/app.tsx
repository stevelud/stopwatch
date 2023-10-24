import { Button } from './button'
import { Timer } from './timer'
import React from 'react'
import { setState } from 'react'

export const App = () => {

    const Phases = ["Click to Start", "Stop", "Reset"]
    let n = 0;

    const [phase, setPhase] = setState(Phases[n])
    const [time, setTime] = setState(0)

    const incrementPhase = () => {
        // There are three phases that go through a cycle
        setState(Phases[n++ % 3])
    }

    const incrementTimer = () => {
        // Updating state just by intervals of 1 tenth of a second
        setTime(time + 0.1)
    }

    const setButtonFunction = () => {
        if (phase === Phases[0]) return startTimer
        if (phase === Phases[1]) return stopTimer
        if (phase === Phases[2]) return resetTimer
    }

    const startTimer = () => {
        setInterval(incrementTimer, 100)
        incrementPhase()
    }

    const stopTimer = () => {
        clearInterval()
        incrementPhase()
    }

    const resetTimer = () => {
        setTime(0)
        incrementPhase()
    }

    return (
        <>
            <Timer time={time} />
            <Button phase={phase} f={setButtonFunction()} />
        </>
    )
}