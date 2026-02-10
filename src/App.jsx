import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // function to generate hex color code, https://www.30secondsofcode.org/js/s/random-hex-color-code/
  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  // sets the answer whether reset, win, or lose
  const [answer, setAnswer] = useState('---')
  // generaets the colors 
  const [color] = useState([
    randomHexColorCode(),
    randomHexColorCode(), 
    randomHexColorCode()
  ]);
 
  // get random number 1-3 -> 0, 1, 2
  const [correctNumber] = useState(Math.floor(Math.random() * 3));
  console.log(correctNumber)
  
  // gets the answer color at correctNumber
  const [correctColor] = useState(color[correctNumber])

// handles when user wants to guess what div it is / square. The click handles the state of the answer 
  const handleClick = (index) =>{
    if (index === correctNumber) {
      setAnswer('Correct')

    }else{
      setAnswer('Incorrect')
    }
  };

  // Finishing reset button, just going to reload window. 
  const reset = () =>{
    window.location.reload();
  }


  return (
    <div className='overall'>
      
        <h3>Click this Color: {correctColor}</h3>
        <div className='container'>
          <div className='square' style={{ backgroundColor: color[0] }} onClick={() => handleClick(0)}> </div>
          <div className='square ' style={{ backgroundColor: color[1] }} onClick={() => handleClick(1)}> </div>
          <div className='square ' style={{ backgroundColor: color[2] }} onClick={() => handleClick(2)}> </div>

          
        </div>
        <div className='answer'>
           {answer}
        </div>


        <button className='button' onClick={reset}>Reset</button>
          
        
    </div>
  )
}

export default App
