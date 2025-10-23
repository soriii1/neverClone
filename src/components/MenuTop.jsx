import React from 'react';
import Menu from './Menu';

function MenuTop() {
  return (
    <div className="menuTop">
      <Menu url="https://www.naver.com/" img="icon-menu4.png"/>
      <Menu url="https://www.naver.com/" img="icon-menu2.png"/>
      <p style={{marginRight:'1010px'}}></p>
      <Menu url="https://www.naver.com/" img="chat.png"/>
      <Menu url="https://www.naver.com/" img="icon-menu3.png"/>
      <Menu url="https://www.naver.com/" img="icon-menu1.png"/>
    </div>
  )
}

export default MenuTop;
