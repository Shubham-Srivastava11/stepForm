import './Headers.css';
import React from 'react';

const Headers = (props) => {

    return (
        <React.Fragment>
            <h1>
                {props.header}
            </h1>
            <h4>
                {props.subHeader}
            </h4>
        </React.Fragment>
    )
}

export default Headers;