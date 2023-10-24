import React from 'react'

interface ButtonProps {
    phase: string,
    f: any
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <input type="button"
               onClick={props.f}
               value={props.phase} // should either be: "Click to Start", "Stop", "Reset" 
         />
    )
}