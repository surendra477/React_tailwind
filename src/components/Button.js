import React from 'react'

function Button(props) {
    return (
        <div>
        <button type="button" className={`btn ${props.btncolor} hover:${props.bhhover} hover:${props.texthover}`}>{props.text}</button>
        </div>
    )
}

export default Button
