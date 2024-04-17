import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Components/Form.tsx';
import './App.css';

function App() {
  const [timeTable, setTimeTable] = useState([]);
  return (
    <div className = "App">
      <div className = "titleContainer">
        <h1 className = "titleTextBo">AttendanceManager</h1>
        <h2 className = "titleTextIt">WebApp</h2>
      </div>
      <Form TT = {timeTable} setTT = {setTimeTable} cn = "inputContainer"></Form>
      <div className = "outputConatiner">
      
      </div>
    </div>
  )
}

export default App
