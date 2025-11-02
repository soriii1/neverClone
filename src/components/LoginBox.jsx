
import React from "react";
import styled from "@emotion/styled";
import "../App.css";

export default function LoginBox() {

  const Box = styled.div`
    width: 378px;
    height: 155px;
    padding: 20px;
    border: 1px solid #d0d0d0;
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  const Btn = styled.div`
    padding: 20px;
    text-align: center;
    height: 55px;
    font-size: 18px;
    background-color: #02b14a; 
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 20px;
  `;

  const Links = styled.div`
    font-size: 14px;
    text-align: center;
    gap: 7px;
  `;
  const Title = styled.p`
    font-size: 13px;
    text-align: center;
  `

  return (
    <Box onClick={()=>window.location.href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/"}>
      <Title>네이버를 더 안전하고 편리하게 이용하세요</Title>
      <Btn> <strong>NAVER</strong> 로그인</Btn>
      <Links>
        <a >회원가입</a> | <a>아이디 찾기</a> | <a>비밀번호 찾기</a>
      </Links>
    </Box>
  );
}


