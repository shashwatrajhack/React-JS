import React, { Fragment, useState } from "react";
//import PropTypes from 'prop-types';
//import { useState } from "react";
//destructuring of fragment


let counter=4;
function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title:"Go to gym",
      description:"for 2 hours"
    },
    {
      id:2,
      title:"go to college",
      description:"for 1 hrs"
    },
    {
      id:3,
      title:"go for run",
      description:"good for health"
    }
  ]);

  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }

   return (
    <Fragment>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description} />
      })}
      
    </Fragment>
  );
}

// eslint-disable-next-line react/prop-types
function Todo({title,description}){

  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}




export default App;
