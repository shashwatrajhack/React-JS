import React, { useState, useCallback } from "react";

// Memoized child component
// const Button = React.memo(({ onClick, label }) => {
//   console.log(`Rendering Button: ${label}`);
//   return <button onClick={onClick}>{label}</button>;
// });

function App() {
  const [count, setCount] = useState(0);


  // Memoized increment function
  // const increment = useCallback(() => {
  //   setCount(prevCount => prevCount + 1);
  // }, []);

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

function Counter({count,setCount}) {
  
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          if(count>0){
            setCount(count - 1)
          }
          ;
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          setCount(count == 0);
        }}
      >
        Reset
      </button>
    </>
  );
}

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(0);

//   //useMemo hook

//   let count = useMemo(()=>{
//     let finalCount = 0;
//   for (let i = 0; i <= inputValue; i++) {
//     finalCount = finalCount + i;
//   }

//   return finalCount;
//   },[inputValue])

//   return (
//     <>
//       <input
//         onChange={(e) => {
//           setInputValue(e.target.value);
//         }}
//         placeholder="find sum from 1 to n"
//       />{" "}
//       <br />
//       Sum from 1 to {inputValue} is {count} <br />
//       <div>Counter {counter}</div>
//       <br />
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         click me
//       </button>
//     </>
//   );
// }

export default App;
