import React from 'react';
import './Char.css';

const charComponent = (props) => {
    return (
        <div>
            <p className="Char">{props.val}</p>
        </div>
    )
}

export default charComponent;