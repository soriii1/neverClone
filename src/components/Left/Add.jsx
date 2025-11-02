import React from "react";

export default function Add({img, text}){
  return (
    <>
      <div style={{width:'98px', height:'186px', textAlign:'center', }}>
        <img src={img} style={{width:'98px', height:'126px', borderRadius:'5px', border:'1px solid #ddd'}}></img>
        <p style={{marginTop:'3px'}}>{text}</p>
      </div>
      
    </>
  )
}