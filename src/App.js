import images from './images';
import './App.css';
import Welcome from './Components/Welcome/Welcome';
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import HomeSetup from './Components/HomeSetup/HomeSetup';
import Usage from './Components/Usage/Usage';
import FinalScreen from './Components/FinalScreen/FinalScreen';
import Button from './UI/Button/Button';
import React, { useEffect, useState } from 'react';

function App() {
  // const [stepProgress, setStepProgress] = useState([
  //   {
  //     'comp': <Welcome />,
  //     'page': 'Welcome',
  //     'status': true,
  //   }
  //   ,

  //   {
  //     'comp': <HomeSetup />,
  //     'page': 'HomeSetup',
  //     'status': false,

  //   }
  //   ,

  //   {
  //     'comp': <Usage />,
  //     'page': 'Usage',
  //     'status': false,

  //   }
  //   ,

  //   {
  //     'comp': <FinalScreen />,
  //     'page': 'FinalScreen',
  //     'status': false,

  //   }
  // ])

  // useEffect(() => {
  //   setStepProgress(stepProgress);
  // }, [stepProgress]);

  // const handleClick = (curPage) => {
  //   for (let val of stepProgress) {
  //     if (val.page === curPage) {
  //       val.status = false;
  //       let index = stepProgress.indexOf(val);
  //       stepProgress[index + 1].status = true;
  //       setStepProgress(stepProgress);
  //     }
  //   }
  // }

  //---------------------------------------
  localStorage.setItem('Name', '');
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

  return (
    <div className="App">
      <div
        className='main_logo'
        style={{ backgroundImage: `url(${images.logo})` }}
      >
      </div>

      <progress id="file" value={stepProgress * 25} max="100">  </progress>


      {/* {stepProgress.map((key) => {
        if (key.status) {
          return (
            <React.Fragment >
              {key.comp}
              <Button
                clickHandler={handleClick}
                id={key.page}
                name="Create Workspace" />
            </React.Fragment>
          );
        }
      }
      )} */}


      {componentObj.map(key => {
        return (
          <React.Fragment>
            {key[stepProgress]}
          </React.Fragment>
        )
      })}


      {stepProgress === 4 ?
        <Button
          clickHandler={handleClick}
          id={stepProgress}
          name="Launch Eden" />
        :
        <Button
          clickHandler={handleClick}
          id={stepProgress}
          name="Create Workspace" />
      }


    </div>
  );
}

export default App;
