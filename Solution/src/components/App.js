import React from 'react'
import '../styles/App.css';
const App = () => {

  // do not change the code inside the function clickA
  const clickA = () =>{
    console.log('Clicked button A')
  }

  return (
    <div id="main">
      <button id="button-a" onClick={clickA}>Button d</button>
    </div>
  )
}


export default App;
