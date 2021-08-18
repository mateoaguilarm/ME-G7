import React, { useContext } from 'react'

import { themeContext } from '../contexts/themeContext'

function Footer() {
    const { toggle } = useContext(themeContext)
    return (
        <div className={`footer ${toggle ? 'light' : 'dark'}`}>
            <h1>Footer 👣</h1>
        </div>
    )
}

export default Footer
