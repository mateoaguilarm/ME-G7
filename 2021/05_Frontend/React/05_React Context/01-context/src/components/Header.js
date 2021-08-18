import React, { useContext } from 'react'

import { themeContext } from '../contexts/themeContext'

function Header() {
    const { toggle, toggleFunc } = useContext(themeContext)
    return (
        <div className={`header ${toggle ? 'light' : 'dark'}`}>
            <h1>Header 👤</h1>
            <button onClick={ toggleFunc }>Change theme</button>
        </div>
    )
}

export default Header
