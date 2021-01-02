import React,{ useEffect } from "react";
import { Link } from 'react-router-dom';
import '../test.scss';

const allFlower = require('../data.json')

function Tabs() {
  const flowerArr = allFlower.flower
  useEffect(()=>{
    console.log(flowerArr)
  },[])
  return (
    <div className="taiwan12flower">
      <h1 className='taiwan12 title'>TAIWAN FLOWER</h1>
      <div className='taiwan12 tabs'>
        {flowerArr.map((item,key)=>{
          return (
            <Link className="taiwan12 tab-toggle" to={`/taiwan12flower/${key}`}>
              <div className='taiwan12 flower-tab' key={key}>{item.name}</div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Tabs;
