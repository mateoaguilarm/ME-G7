import React, { useContext } from 'react'
import { themeContext } from '../contexts/themeContext'

function Main() {
    const { toggle } = useContext(themeContext)
    return (
        <div className={`main ${toggle ? 'light' : 'dark'}`}>
            <h1>Main 👔</h1>
        </div>
    )
}

export default Main
