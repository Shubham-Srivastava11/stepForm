import './Usage.css';
import Headers from '../../UI/Headers/Headers';
import Card from '../../UI/Card/Card';
import { BsFillPersonFill, BsFillPeopleFill } from "react-icons/bs";
import Button from '../../UI/Button/Button';

const Usage = () => {
    return (
        <div>
            <form className="usageForm">
                <Headers
                    header="How are you planning to use Eden?"
                    subHeader="We'll streamline your setup experience accordingly."
                />
                <div className='innerCard'>
                    <Card
                        type={BsFillPersonFill}
                        head="For myself"
                        content="Write better. Think more clearly. Stay organized." />
                    <Card
                        type={BsFillPeopleFill}
                        head="With my team"
                        content="Wikis, docs, tasks & projects, all in love place." />
                </div>
                {/* <Button
                    id='Usage'
                    name="Create Workspace" /> */}
            </form>
        </div>
    )
}

export default Usage;