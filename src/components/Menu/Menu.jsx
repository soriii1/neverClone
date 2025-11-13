import React from 'react';
import '../../App.css'
import styled from '@emotion/styled';

const Text = styled.a`
  cursor : pointer;
  margin-top : 6px;
  margin-right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width:35px;
  height:35px;
`;

export default function Menu({url, img}) {
  return (
    <>
      <Text href={url}>
       <Img src={img} />
      </Text>
     
    </>
  )
}

