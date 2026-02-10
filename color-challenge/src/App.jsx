import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  const [answer, setAnswer] = useState('---')
  const [color, setColor] = useState([
    randomHexColorCode(),
    randomHexColorCode(), 
    randomHexColorCode()
  ]);
  

  return (
    <div className='overall'>
      
        <h3>Click this Color: {color}</h3>
        <div className='container'>
          <div className='square'> </div>
          <div className='square '> </div>
          <div className='square '> </div>

          
        </div>
        <div className='answer'>
           {answer}
        </div>
        <button className='button'>Reset</button>
          
        
    </div>
  )
}

export default App
