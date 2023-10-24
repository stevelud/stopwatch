import React from 'react'

export const Button = ({ phase }) => {
    return (
        <input type="button"
               value={phase} // should either be: "Click to Run", "Stop", "Reset" 
         />
    )
}