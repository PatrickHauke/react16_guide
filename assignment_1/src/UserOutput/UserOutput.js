import React from 'react';

const UserOutput = (props) =>{
    const style = {
        backgroundColor: 'blue',
        padding: '8px'
    };

    return (
        <div style = {style}>
            <p>Here is come data!!</p>
            <p onChange={props.changed}>{props.username}</p>
        </div>
    )
}

export default UserOutput;