import React from 'react';

const validation = (props) => {
    let response = (<p>Text too short</p>);
    if(props.len > 5){
        response = (
            <p>Text long enough</p>
        )
    }
    return (
        response
    )
}
export default validation;