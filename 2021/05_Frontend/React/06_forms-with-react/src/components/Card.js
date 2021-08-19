import React from 'react'

function Card(props) {
    const { title, desc, name } = props;
    return (
        <>
            <img src='' alt=''/>
            <h1> {props.title}</h1>
            <p> {props.desc} </p>
            <p> {name} </p>
        </>
    )
}

export default Card;
