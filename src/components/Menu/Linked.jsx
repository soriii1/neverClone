import React from 'react';
import '../../App.css';
import styled from '@emotion/styled';

const EachLink = styled.div`
  width: 76px;
  height: 86px;
  background-color: rgb(255, 255, 255);
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function Linked({ name, url, img }) {

  return (
    <EachLink className="eachLink">
      <a onClick={()=> window.location.href=url}>
        <img src={img} className="LinkImg"></img>
      </a>
      <p> {name} </p>
    </EachLink>

  );
}

