//const useMousePointer = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return position;
// };

// function App() {
//   const mousePointer = useMousePointer();

//   return (
//     <>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//     </>
//   )
// }

// export default App

import React from 'react';

// Top-level component
function App() {
  const user = "This is Prop Drillling"; // Data to be shared

  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <Parent user={user} />
    </div>
  );
}

// Intermediate component (doesn't use 'user')
function Parent({ user }) {
  return (
    <div style={{ border: '1px solid blue', padding: '10px' }}>
      <h2>Parent Component</h2>
      <Child user={user} />
    </div>
  );
}

// Another intermediate component (also doesn't use 'user')
function Child({ user }) {
  return (
    <div style={{ border: '1px solid green', padding: '10px' }}>
      <h3>Child Component</h3>
      <GrandChild user={user} />
    </div>
  );
}

// The component that actually needs the 'user'
function GrandChild({ user }) {
  return (
    <div style={{ border: '1px solid red', padding: '10px' }}>
      <h4>GrandChild Component</h4>
      <p>Hello, <strong>{user}</strong>!</p>
    </div>
  );
}

export default App;

