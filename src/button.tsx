import React from 'react'

export const Button = ({ phase, f }) => {
    return (
        <input type="button"
               onclick={f}
               value={phase} // should either be: "Click to Start", "Stop", "Reset" 
         />
    )
}