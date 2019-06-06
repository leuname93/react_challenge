import React from 'react'

const noResult = (props) => {
    return (
        <p className="no-result">
            {props.children}
        </p>
    )
}

export default noResult