 import { useState } from "react";

 function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <ToggleButton show={show} setShow={setShow} />
      {show && <p>Hello World</p>}
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

// function CustomButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onClickHandler}>Counter {props.count}</button>;
// }

 export default App;
