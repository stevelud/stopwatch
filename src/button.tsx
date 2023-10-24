import React from 'react'

export default Button = ({ phase }) => {
    return (
        <input type="button"
               value={phase} // should either be: Click to Start, Click to Stop, Click to Restart 
         />
    )
}