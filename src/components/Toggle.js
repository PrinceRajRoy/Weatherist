import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './Toggle.sass'

function Toggle() {
    
    const { toggle, mode } = useContext(ThemeContext)

    return (
        <div className={`Toggle ${ mode === 'light' ? "Toggle--active" : ""}`} onClick={() => toggle()}/>
    )
}

export default Toggle
