import React,{ useEffect } from "react";
import { Router, Route, hashHistory } from 'react-router'
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import  Box from "./Component/Box";
import './test.scss';

const allFlower = require('./data.json')

function App() {
  const flowerArr = allFlower.flower
  useEffect(()=>{
    window.addEventListener('click',()=>{
      if(window.location.pathname!=='/taiwan12flower'){
        window.location.href='/taiwan12flower'
      }
    })
  },[])
  return (
    <div className="taiwan12flower">
      <h1 className='taiwan12 title'>TAIWAN FLOWER</h1>
      <div className='taiwan12 tabs'>
        {flowerArr.map((item,key)=>{
          return (
            <Link onClick={(e)=>{e.stopPropagation()}} className="taiwan12 tab-toggle" key={key} to={`/taiwan12flower/${key+1}`}>
              <div className='taiwan12 flower-tab'>{item.name}</div>
            </Link>
          )
        })}
      </div>
        <Route path="/taiwan12flower/1" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        <Route path="/taiwan12flower/2" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        <Route path="/taiwan12flower/3" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        <Route path="/taiwan12flower/4" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        <Route path="/taiwan12flower/5" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        <Route path="/taiwan12flower/6" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        <Route path="/taiwan12flower/7" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        <Route path="/taiwan12flower/8" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        <Route path="/taiwan12flower/9" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        <Route path="/taiwan12flower/10" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        <Route path="/taiwan12flower/11" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        <Route path="/taiwan12flower/12" render={(props) => <Box data={flowerArr[0]} {...props}/>} />
        {/* <Route path="/2" component={Box} />
        <Route path="/3" component={Box} /> */}
    </div>
  );
}

export default App;
