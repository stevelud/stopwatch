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
        setState(Phases[n++])
    }

    return (
        <>
            <Timer time={time} />
            <Button phase={phase} />
        </>
    )
}