import React from 'react';
import './FormContent.css';
import Button from '../../UI/Button/Button';

const FormContent = (props) => {
    return (
        <React.Fragment>

            <div>
                {key.comp}
                <Button
                    clickHandler={handleClick}
                    id={key.page}
                    name="Create Workspace" />
            </div>

        </React.Fragment>
    )
}

export default FormContent;