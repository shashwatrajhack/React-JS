//import React, { Children, Fragment, useState } from "react";
//import PropTypes from 'prop-types';
//import { useState } from "react";
//destructuring of fragment

function App() {
  return <div>
    <CardWrapper>
      <CardWrapper>
        <CardWrapper>
        <TextComponent />
        </CardWrapper>
        
      </CardWrapper>
    </CardWrapper>
    <div>
    <CardWrapper>hi there</CardWrapper>
    <CardWrapper>hellooooooo everyone this is shashwat raj</CardWrapper>

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
