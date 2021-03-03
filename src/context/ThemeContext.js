import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

function ThemeProvider({ children }) {

    const [mode, setMode] = useState('light');

    const toggle = () => {
        mode === 'light' ? setMode('dark') : setMode('light')
    }

    return (
        <ThemeContext.Provider value={{ mode, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
