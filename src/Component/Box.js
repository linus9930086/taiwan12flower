import React,{ useEffect } from "react";
import './Box.scss';

const Box = (props) => {
console.log(props)
  return (
    <div className="taiwan12flower-box container">
      <div className="taiwan12flower-box box" onClick={(e)=>{
        e.stopPropagation()
      }}></div>
    </div>
  );
}

export default Box;
