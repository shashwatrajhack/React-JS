//import { useState } from 'react'
//import './App.css'
import { BrowserRouter, Router, Route, useNavigate } from "react-router-dom";
import  Dashboard  from "./components/Dashboard.jsx";
import  Landing  from "./components/Landing.jsx";

function App() {
  //const [count, setCount] = useState(0)

  const navigate = useNavigate();

  return (
    <>
    <div>
      <button onClick={() => {
        navigate ("/")
      }}>Landing</button>
      <button onClick={() => {
        navigate("/Dashboard")
      }}>Dashboard</button>
    </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
