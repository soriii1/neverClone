import React from "react";
import styled from "@emotion/styled";

const Img = styled.img`
  width:98px;
  height:126px;
  border-radius:5px;
  border:1px solid #ddd;
`;

const Box = styled.div`
  width:98px; 
  height:186px; 
  text-align:center;
`;

const P = styled.p`
  margin-top:3px;
`;
export default function Add({img, text}){
  return (
    <>
      <Box >
        <Img src={img}></Img>
        <P>{text}</P>
      </Box>
      
    </>
  )
}