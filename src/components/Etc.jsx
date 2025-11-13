import React from "react";
import styled from "@emotion/styled";
import "../App.css";
import pizza from "assets/pizza8.png";

const Container = styled.div`
  width: 828px;
  height: 594px;
  border: 1px solid #ddd;
  margin-top: 15px;
  border-radius: 10px;
  overflow: hidden;
`;

const Top = styled.div`
  width: 830px;
  height: 58px;
  background-color: #fff;
  padding: 18px 20px 17px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const TopInner = styled.div`
  display: flex;
  gap: 7px;
  margin-left: 20px;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 830px;
  min-height: 464px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

const AddBox = styled.div`
  flex: 0 0 calc(50% - 10px);
  height: 100px;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  background-color: white;
  box-sizing: border-box;
`;

const Thumb = styled.img`
  width: 38%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  flex-shrink: 0;
  border: 1px solid #ddd;
`;

const Desc = styled.div`
  margin: 0;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 62%;
`;

const Color = styled.div`
  color: green;
  display: inline;
`;

const Gray = styled.p`
  color: gray;
  font-size: 13px;
`;

const Bottom = styled.div`
  width: 830px;
  height: 56px;
  background-color: #fff;
  text-align: center;
  border: 1px solid #ddd;
  box-sizing: border-box;
  margin-top: 10px;
  line-height: 56px;
`;
const NewsTexts = styled.h4`
  color: gray;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: gray;
  }
`;

export default function Etc() {
  return (
    <Container>
      <Top>
        <TopInner>
          <NewsTexts>추천</NewsTexts>
          <NewsTexts>/</NewsTexts>
          <NewsTexts>카테크</NewsTexts>
          <NewsTexts>/</NewsTexts>
          <NewsTexts>웹툰</NewsTexts>
          <NewsTexts>/</NewsTexts>
          <NewsTexts>패션뷰티</NewsTexts>
          <NewsTexts>/</NewsTexts>
          <NewsTexts>리빙푸드</NewsTexts>
          <NewsTexts>/</NewsTexts>
          <NewsTexts>책방</NewsTexts>
          <NewsTexts>/</NewsTexts>
          <NewsTexts>지식</NewsTexts>
          <NewsTexts>/</NewsTexts>
          <NewsTexts>건강</NewsTexts>
          <NewsTexts>/</NewsTexts>
          <NewsTexts>게임</NewsTexts>
        </TopInner>
      </Top>

      <Box>
        {[...Array(8)].map((_, idx) => (
          <AddBox key={idx}>
            <Thumb src={pizza} />
            <Desc>
              이재모 피자 인간적으로 줄이 너무 길다
              <Gray>맛집탐방 - pNN</Gray>
            </Desc>
          </AddBox>
        ))}
      </Box>

      <Bottom>
        펼쳐보기 <Color> + </Color>
      </Bottom>
    </Container>
  );
}
