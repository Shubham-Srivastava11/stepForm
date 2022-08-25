import { useState } from 'react';
import './Card.css';

const Card = (props) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }
    return (
        <div className={`card ${isClicked ? 'clicked' : ''}`} onClick={handleClick} >
            <props.type className={`icon ${isClicked ? 'fill' : ''}`} />
            <h3>{props.head}</h3>
            <h5>{props.content}</h5>
        </div >
    )
}

export default Card;