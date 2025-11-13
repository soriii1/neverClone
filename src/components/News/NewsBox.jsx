import React from "react";
import styled from "@emotion/styled";

const BoxContainer = styled.div`
  width: 380px;
  height: 104px;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
`;

const BoxImage = styled.img`
  width: 156px;
  height: 104px;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const SourceText = styled.p`
  margin: 0;
`;

const SubscribeBtn = styled.button`
  border: 1px solid skyblue;
  border-radius: 20px;
  color: blue;
  margin-left: auto;
  cursor: pointer;
  background-color: white;
`;

const TitleText = styled.p`
  font-size: 13px;
`;

const DateText = styled.p`
  margin: 0;
  font-size: 12px;
  color: #555;
`;

export default function NewsBox({ img, title, date }) {
  return (
    <BoxContainer>
      <BoxImage src={img} alt="news" />

      <Content>
        <Header>
          <SourceText>PNN</SourceText>
          <SubscribeBtn>구독 +</SubscribeBtn>
        </Header>

        <div>
          <TitleText>{title}</TitleText>
          <DateText>{date}</DateText>
        </div>
      </Content>
    </BoxContainer>
  );
}
