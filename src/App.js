import images from './images';
import './App.css';
import Welcome from './Components/Welcome/Welcome';
import "react-step-progress/dist/index.css";
import HomeSetup from './Components/HomeSetup/HomeSetup';
import Usage from './Components/Usage/Usage';
import FinalScreen from './Components/FinalScreen/FinalScreen';
import Button from './UI/Button/Button';
import React, { useState } from 'react';
import ProgressBar from './Components/ProgressBar/ProgressBar';

function App() {

  const [stepProgress, setStepProgress] = useState(1);

  const componentObj = [
    { 1: <Welcome />, },
    { 2: <HomeSetup /> },
    { 3: <Usage /> },
    { 4: <FinalScreen /> }
  ]

  const handleClick = (val) => {
    setStepProgress(val);
  }

  const barClickHanlder = (val) => {
    setStepProgress(val);
  }
  return (
    <div className="App">
      <div
        className='main_logo'
        style={{ backgroundImage: `url(${images.logo})` }}
      >
      </div>

      <div className='stepTrack'>
        <ProgressBar
          len={componentObj.length}
          progress={stepProgress}
          barClick={barClickHanlder} />
      </div>

      {componentObj.map(key => {
        return (
          <>
            {key[stepProgress]}
          </>
        )
      })}

      <Button
        className='btn'
        clickHandler={handleClick}
        id={stepProgress}
        name={stepProgress === componentObj.length ? "Launch Eden" : "Create Workspace"}
        isDisabled={stepProgress === componentObj.length ? true : false} />

    </div>
  );
}

export default App;
