//var React=require('react')
import React from 'react';
//var ReactDOM = require('react-dom')
import ReactDOM from 'react-dom';

import "./index.css";
const fname = "Rohit";
const mname = "Kumar";
const lname = "Bind";
const currentDate =new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const name ={
color:"blue",

backgroundColor:"matteblue",
textTransform:"capitalize",
textAlign: "center",
marginTop: "150px",
};

let currDate = new Date();
    currDate = currDate.getHours();
    let greeting ="";
    const greetstyle ={}

    if (currDate >= 1 && currDate < 12)
    {
    greeting ="Good morning!!";
    greetstyle.color="green";

  }
    else if (currDate >= 12 && currDate <16)
    {
    greeting ="Good afternoon!!"; 
     greetstyle.color="orange";
  }
    else if(currDate >=4 && currDate < 19 )
    {
      greeting ="Good evening!!";
      greetstyle.color ="red";
    }
    else
     {
      greeting = "Good night!!";
      greetstyle.color ="black"
    }

ReactDOM.render(

<>
<h1 className='greet'> Hello Sir/ma'am , <span style={greetstyle}> {greeting} </span></h1>
<h2 style={name} > I'm {fname} {mname} {lname}</h2>
<div className='date'>
<p> Today date is {currentDate}</p>
<p> Today time is {currentTime}</p>
</div>
</>,
document.getElementById('root')
);

