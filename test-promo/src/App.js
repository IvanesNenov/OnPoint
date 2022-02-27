import React from 'react'
import Page1 from './Pages/Page1/Page1'
import Page2 from './Pages/Page2/Page2'
import classes from './App.module.css';
import Slider from "./Slider/Slider";

function App() {
  return (
    <div className={classes.App}>
      <Slider/>
    </div>
  );
}

export default App;
