import React, { useState, useCallback } from 'react';

// Memoized child component
const Button = React.memo(({ onClick, label }) => {
  console.log(`Rendering Button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoized increment function
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>useCallback Example</h1>

      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something..."
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />

      <div style={{ marginTop: '1rem' }}>
        <Button onClick={increment} label="Increment Count" />
        <p>Count: {count}</p>
      </div>
    </div>
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
