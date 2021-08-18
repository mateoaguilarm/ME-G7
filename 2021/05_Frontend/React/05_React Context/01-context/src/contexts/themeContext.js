import react from 'react';

const themeContext = React.createContext(false);

function themeProvider({children}) {
    const [ toggle, setToggle ] = useState(false);
    const toggleFunc = setToggle(!toggle)

    return (
        <themeContext.Provider value={{ toggle, toggleFunc }}>
            {children}
        </themeContext.Provider>
    )
}

export {themeContext, themeProvider };