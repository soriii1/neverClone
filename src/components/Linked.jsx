import React from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Linked({ name, url, img }) {
  const nav = useNavigate();
  return (
    <div className="eachLink">
      <a href={url}>
        <img src={img} className="LinkImg"></img>
      </a>
      <p> {name} </p>
    </div>

  );
}

export default Linked;