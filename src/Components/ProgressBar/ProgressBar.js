import './ProgressBar.css';
import React from 'react';

const ProgressBar = (props) => {

    const stepCounter = [...Array.from({ length: props.len }, (_, i) => i + 1)];

    const handleBarClick = (event) => {
        console.log(event.target.innerHTML);
        props.barClick(Number(event.target.innerHTML));
    }
    return (
        < React.Fragment >
            {
                stepCounter.map(step =>
                    <React.Fragment>
                        <div
                            className={`step ${step <= props.progress ? 'fill' : ""}`}
                            onClick={handleBarClick}>
                            {step}

                        </div>
                        {step < 4 ?
                            <progress
                                id="file"
                                value={props.progress > step ? (100) : 0 || props.progress === step ? 50 : 0}
                                max="100">

                            </progress>
                            : <></>
                        }
                    </React.Fragment >
                )
            }
        </React.Fragment >
    );

}

export default ProgressBar;