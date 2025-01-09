import React, {Fragment, useState} from "react";
//import { useState } from "react";
//destructuring of fragment

function App() {
  const[title,setTitle] = useState("world is here");

  function updateTitle(){
    setTitle("world is " + Math.random());
  }
  return (
    <Fragment>
      <button onClick={updateTitle}>Update the Title1</button>
      <Header title= {title} />
      <Header title="this world is beautiful" />
    </Fragment>
  );
}
function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
