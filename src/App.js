import React from "react";
import './App.css';

const App = () => {

  const [height,setheight] = React.useState(180);
  const [weight,setweight] = React.useState(80);
  const [bmi,setbmi] = React.useState(24.69);
  function onHeightChange(e){
    const newHeight = e.target.value;
    setheight(newHeight);
    const newBmi = (weight / ((newHeight / 100) ** 2)).toFixed(2);
    setbmi(newBmi);
  }
  function onWeightChange(e){
    const newWeight = e.target.value;
    setweight(newWeight);
    const newBmi = (newWeight / ((height / 100) ** 2)).toFixed(2);
    setbmi(newBmi);
  }
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="imput-section">
        <p className='slider-output' >{weight}kg</p>

        <input className = 'input-slider' type="range" step="1" min="40" max="200" onChange={onWeightChange}/>
        <p className='slider-output' >{height}cm  </p>
        <input className = 'input-slider' type="range" step="1" min="100" max="250" onChange={onHeightChange}/>
      </div>
      <div className="output-section">
        <h2>Your BMI is</h2>
        <p className='bmi-output'>{bmi}  </p>
      </div>
    </main>
  );
};

export default App;