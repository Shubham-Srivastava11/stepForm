import './Button.css';

const Button = (props) => {

    const handleClick = () => {
        props.clickHandler(props.id + 1);
    }

    return (
        <button
            key={props.id}
            type="submit"
            onClick={handleClick}
            disabled={props.isDisabled}>
            {props.name}

        </button>
    )
}

export default Button;