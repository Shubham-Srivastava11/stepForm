import './FinalScreen.css';
import Headers from '../../UI/Headers/Headers';
import { useSelector } from 'react-redux';

const FinalScreen = () => {

    const formData = useSelector(store => store.formData)

    return (
        <div className='finalScreen'>
            <Headers
                header={`Congratulations, ${formData.dpName}!`}
                subHeader="You have completed onboarding, you can start using the Eden!"
            />
        </div>
    )
}

export default FinalScreen;