//import React, { Children, Fragment, useState } from "react";
//import PropTypes from 'prop-types';
//import { useState } from "react";
//destructuring of fragment

function App() {
  return <div>
    <CardWrapper>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </CardWrapper>
    <div>
    <CardWrapper>hi there</CardWrapper>

    </div>
   
  </div>
  }

  function CardWrapper({children}){
    return <div  style={{border:"2px  solid black", padding:20}}>
      {children}

    </div>
  }

  function TextComponent(){
    return <div>
      hi from text comp
    </div>
  }




export default App;
