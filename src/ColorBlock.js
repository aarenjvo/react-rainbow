import React from 'react'

function ColorBlock(props) {
    return (
        <div className="colorBlock" style={{backgroundColor: props.color, height: '80px'}}>
            <p style={{'text-align': 'center', margin: 0}}>{props.color}</p>
        </div>
    )
}

export default ColorBlock