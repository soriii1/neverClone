import React from 'react';
import '../App.css'

function Menu({url, img}) {
  return (
    <>
      <a 
      href={url}
      style={{
        
        cursor : 'pointer',
        marginTop : '6px',
        marginRight: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

      }}>
       <img src={img} style={{width:'35px', height:'35px'}}/>
      </a>
     
    </>
  )
}

export default Menu;