import React from 'react'

interface ButtonProps {
    phase: string | number,
    f: any
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <input type="button"
               className="ButtonStyle"
               onClick={props.f}
               value={props.phase} // should either be: "Click to Start", "Stop", "Reset" 
         />
    )
}