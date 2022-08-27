import './FinalScreen.css';
import Headers from '../../UI/Headers/Headers';
import { useSelector } from 'react-redux';
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const FinalScreen = () => {

    const formData = useSelector(store => store.formData);
    console.log(formData);

    const areTruthy = Object.values(formData).every(
        value => value
    );


    return (
        <div className='finalScreen'>

            {areTruthy ?
                <>
                    <AiFillCheckCircle
                        id='check' />
                    <Headers
                        header={`Congratulations, ${formData.dpName}!`}
                        subHeader="You have completed onboarding, you can start using the Eden!"
                    />
                </>
                :
                <>
                    <AiOutlineCloseCircle
                        id='close' />
                    <Headers
                        header={`Error!!`}
                        subHeader="Please complete the form first."
                    />
                </>}

        </div>
    )
}

export default FinalScreen;