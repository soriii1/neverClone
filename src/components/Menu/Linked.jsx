import React from 'react';
import '../../App.css'


export default function Linked({ name, url, img }) {

  return (
    <div className="eachLink">
      <a onClick={()=> window.location.href=url}>
        <img src={img} className="LinkImg"></img>
      </a>
      <p> {name} </p>
    </div>

  );
}

