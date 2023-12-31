import React from 'react'

interface TimerProps {
    time: Number
}

export const Timer: React.FC<TimerProps> = (props: TimerProps) => {
    return (
        <div className="TimerStyle">
            {props.time.toFixed(1)}
        </div>
    )
}