import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Icon,NavBar} from 'antd-mobile'


fetch("/j/category/").then(res=>res.json()).then(data=>{
    console.log(data)
})


ReactDOM.render(
  <div>
    <NavBar 
      mode="light"     
      iconName={null}
    >首页</NavBar>
  </div>
, document.getElementById("root"));

