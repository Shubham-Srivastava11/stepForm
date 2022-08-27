import { useState } from 'react';
import './Card.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../store/formDataSlice';

const Card = (props) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const dispatch = useDispatch();

    const formData = useSelector(store => store.formData)

    const handleFormChange = (event) => {
        dispatch(updateFormData({
            value: props.user,
            name: 'user'
        }))
    }

    return (
        <div
            className={`card ${props.user === formData.user ? 'clicked' : ''}`}
            onClick={handleFormChange}
        >
            <props.type
                className={`icon ${props.user === formData.user ? 'iconfill' : ''}`}
            />
            <h3>{props.head}</h3>
            <h5>{props.content}</h5>
        </div >
    )
}

export default Card;