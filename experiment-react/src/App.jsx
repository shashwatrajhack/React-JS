import React from 'react';



function App() {
  const [title, setTitle] = React.useState("Hello from my vlog");

  function updateTitile(){
    setTitle("Hello from my vlog " + Math.random());
  }


  return <div>

    <button onClick={updateTitile}>Update the title</button>
    <Header title={title}/>
    <Header title="Hello from my vlog 2"/>
    <Header title="Hello from my vlog 2"/>
    <Header title="Hello from my vlog 2"/>
    <Header title="Hello from my vlog 2"/>
  </div>


}



const Header = React.memo(function Header({title}){
  return<div>
    {title}
  </div>
})

export default App
