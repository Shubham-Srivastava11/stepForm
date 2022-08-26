import './HomeSetup.css';
import Headers from '../../UI/Headers/Headers';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../store/formDataSlice';


const HomeSetup = () => {

    const dispatch = useDispatch();

    const formData = useSelector(store => store.formData)

    const handleFormChange = (event) => {
        dispatch(updateFormData({
            value: event.target.value,
            name: event.target.name
        }))
    }

    return (
        <div>
            <form className="homeForm">

                <Headers
                    header="Let's setup a home for all your work"
                    subHeader="You can always create another workspace later."
                />
                <div>
                    <label>
                        Workspace Name
                    </label>
                    <input
                        name='workspaceName'
                        type="text"
                        placeholder="Eden"
                        value={formData.workspaceName}
                        onChange={handleFormChange}
                    />

                </div>
                <div>
                    <label>
                        Workspace URL <span>(Optional)</span>
                    </label>
                    <input
                        name='workspaceURL'
                        type="text"
                        placeholder="www.eden.com"
                        value={formData.workspaceURL}
                        onChange={handleFormChange}
                    />

                </div>
            </form>
        </div>
    )
}

export default HomeSetup;