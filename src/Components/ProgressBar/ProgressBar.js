import './ProgressBar.css';
import React from 'react';

const ProgressBar = (props) => {

    const stepCounter = [...Array.from({ length: 4 }, (_, i) => i + 1)];

    return (
        < React.Fragment >

            {
                stepCounter.map(step =>
                    <React.Fragment>
                        <div
                            className={`step ${step === 1 ? '' : "margin"} ${step <= props.progress ? 'fill' : ""}`}>
                            {step}

                        </div>
                        {step < 4 ?
                            <progress
                                id="file"
                                value={props.progress >= step ? (props.progress * 50) : 0}
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