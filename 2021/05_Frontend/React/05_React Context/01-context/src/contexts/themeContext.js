import { useState, createContext } from 'react';

const themeContext = createContext(false);

function ThemeProvider({children}) {
    const [ toggle, setToggle ] = useState(false);
    const toggleFunc = setToggle(!toggle)

    return (
        <themeContext.Provider value={{ toggle, toggleFunc }}>
            {children}
        </themeContext.Provider>
    )
}

export {themeContext, ThemeProvider };