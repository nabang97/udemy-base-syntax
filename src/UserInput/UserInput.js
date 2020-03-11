import React from 'react';

const userInput = (props) => {
    const style = {
        border: '1px solid pink',
        padding: '6px',
        borderRadius: '5px'
    }
    return <input 
            type="text" 
            style={style}
            onChange={props.changed} 
            value={props.currentName}></input>
}

export default userInput;