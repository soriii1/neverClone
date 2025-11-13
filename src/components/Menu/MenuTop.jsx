import React from 'react';
import Menu from './Menu';
import icon1 from "assets/icon-menu4.png";
import icon2 from "assets/icon-menu2.png";
import icon3 from "assets/icon-menu3.png";
import icon4 from "assets/icon-menu1.png";
import chat from "assets/chat.png";
import styled from '@emotion/styled';

const MT = styled.div`
  display: flex;   
  width: 1280px;
  height: 48px;
  background-color: #ffffff;
 
`;

export default function MenuTop() {
  return (
    <MT>
      <Menu url="https://www.naver.com/" img={icon1} />
      <Menu url="https://www.naver.com/" img={icon2} />
      <p style={{marginLeft:'1010px'}}></p>
      <Menu url="https://www.naver.com/" img={chat} />
      <Menu url="https://www.naver.com/" img={icon3} />
      <Menu url="https://www.naver.com/" img={icon4} />
    </MT>
  )
}


