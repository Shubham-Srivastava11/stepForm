import './FinalScreen.css';
import Headers from '../../UI/Headers/Headers';
import Button from '../../UI/Button/Button';
const FinalScreen = () => {
    return (
        <div className='finalScreen'>
            <Headers
                header={`Congratulations, ${localStorage.getItem('Name')}!`}
                subHeader="You have completed onboarding, you can start using the Eden!"
            />
            {/* <Button
                id='FinalScreen'
                name="Launch Eden" /> */}
        </div>
    )
}

export default FinalScreen;