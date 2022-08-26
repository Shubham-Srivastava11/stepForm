import './Welcome.css';
import Headers from '../../UI/Headers/Headers';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../store/formDataSlice';

const Welcome = () => {

    const dispatch = useDispatch();

    const formData = useSelector(store => store.formData)

    const handleFormChange = (event) => {
        dispatch(updateFormData({
            value: event.target.value,
            name: event.target.name
        }))
    }
    return (
        <div className="welcomeForm">
            <Headers
                header="Welcome! First things first..."
                subHeader="You can always change them later."
            />
            <form className="nameForm">
                <div>
                    <label>
                        Full Name
                    </label>
                    <input
                        name='fullName'
                        type="text"
                        placeholder="Steve Jobs"
                        value={formData.fullName}
                        onChange={handleFormChange}
                    />

                </div>
                <div>
                    <label>
                        Display Name
                    </label>
                    <input
                        name='dpName'
                        type="text"
                        placeholder="Steve"
                        value={formData.dpName}
                        onChange={handleFormChange}
                    />

                </div>
            </form>
        </div>
    )
}

export default Welcome;