import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <a href={props.link} target="_blank" rel="noopener noreferrer"><div className={props.className}></div></a>
            <h3>
                <a href={props.link} target="_blank" rel="noopener noreferrer" >{props.name}</a>
            </h3>
            <p>{props.text}</p>
            <p>{props.text2}</p>
        </div>
    )
}

export default Card