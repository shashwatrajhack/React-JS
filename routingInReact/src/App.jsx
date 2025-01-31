import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{background:"black", color:"white"}}>
        hi this is the topbar
      </div>
      <BrowserRouter><Routes>
        <Route></Route>
        </Routes></BrowserRouter>
    </div>
  )
}

export default App
