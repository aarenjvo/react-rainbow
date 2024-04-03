import React, { useState, useRef } from 'react'

function ColorForm(props) {
    let [input, setInput] = useState('')
    let inputRef = useRef(null)

    const isColorValid = (color) => {
        const s = new Option().style
        s.color = color
        return s.color !== ''
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isColorValid(input)) {
            props.addColor(input)
        } else {
            alert('Invalid color!')
        }
        inputRef.current.value = ''
    }

    return (
        <div style={{'text-align': 'center', 'margin-top': '2em'}}>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setInput(e.target.value)} ref={inputRef} style={{width: '20em'}}/>
                <button type="submit" style={{'margin-left': '.5em', width: '10em'}}>Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm
