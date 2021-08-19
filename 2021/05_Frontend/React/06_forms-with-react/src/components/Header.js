import React from 'react'

function Header(props) {
    const { title, desc } = props;
    return (
        <>
            <h1> {title}</h1>
            <p> {desc} </p>
        </>
    )
}

export default Header;
