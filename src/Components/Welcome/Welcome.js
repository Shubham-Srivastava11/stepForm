import './Welcome.css';
import Button from '../../UI/Button/Button';
import Headers from '../../UI/Headers/Headers';

const Welcome = () => {

    const handleName = (event) => {
        if (event.target.value.length === 0)
            localStorage.setItem('Name', '');
        localStorage.setItem('Name', event.target.value);
    };

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
                    <input type="text" placeholder="Steve Jobs" />

                </div>
                <div>
                    <label>
                        Display Name
                    </label>
                    <input type="text" placeholder="Steve" onChange={handleName} />

                </div>
                {/* <Button
                    id='Welcome'
                    name="Create Workspace" /> */}
            </form>
        </div>
    )
}

export default Welcome;