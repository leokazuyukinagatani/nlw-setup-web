import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/global.css'
import { Habit } from './components/Habit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Habit completed={3}/>
      <Habit completed={23}/>
      <Habit completed={33}/>
      <Habit completed={31}/>
      
      <h1>Hello World</h1>
    </div>
  )
}

export default App
