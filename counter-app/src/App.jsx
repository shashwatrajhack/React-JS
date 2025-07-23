 import { useState } from "react";

 function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <ToggleButton show={show} setShow={setShow} />
      {show && <p>Hello World</p>}
      <CustomButton />
    </div>
  );
}

function ToggleButton({ show, setShow }) {
  return (
    <button onClick={() => setShow(!show)}>
      {show ? "Hide" : "Show"} Message
    </button>  
  );
}

// //COMPONENT

function CustomButton() {
  const [count,setCount]  = useState(0);

  function onClickHandler() {
    setCount(count + 1);
  }

  return <button onClick={onClickHandler}>Counter {count}</button>;
}

 export default App;
