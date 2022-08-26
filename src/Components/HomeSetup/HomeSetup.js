import './HomeSetup.css';
import Headers from '../../UI/Headers/Headers';
import Button from '../../UI/Button/Button';

const HomeSetup = () => {
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
                    <input type="text" placeholder="Eden" required />

                </div>
                <div>
                    <label>
                        Workspace URL <span>(Optional)</span>
                    </label>
                    <input type="text" placeholder="www.eden.com" required />

                </div>
                {/* <Button
                    id='HomeSetup'
                    name="Create Workspace" /> */}
            </form>
        </div>
    )
}

export default HomeSetup;