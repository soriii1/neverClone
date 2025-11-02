import React from 'react';
import Menu from './Menu';
import icon1 from "../../assets/icon-menu4.png";
import icon2 from "../../assets/icon-menu2.png";
import icon3 from "../../assets/icon-menu3.png";
import icon4 from "../../assets/icon-menu1.png";
import chat from "../../assets/chat.png";

export default function MenuTop() {
  return (
    <div className="menuTop">
      <Menu url="https://www.naver.com/" img={icon1} />
      <Menu url="https://www.naver.com/" img={icon2} />
      <p style={{ marginRight: '1010px' }}></p>
      <Menu url="https://www.naver.com/" img={chat} />
      <Menu url="https://www.naver.com/" img={icon3} />
      <Menu url="https://www.naver.com/" img={icon4} />
    </div>
  )
}


