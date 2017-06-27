import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Icon,NavBar} from 'antd-mobile'
import Header from './components/Header'

fetch("/j/category/").then(res=>res.json()).then(data=>{
    console.log(data)
})


ReactDOM.render(
 	<Header/>
, document.getElementById("root"));

