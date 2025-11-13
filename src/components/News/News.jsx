import React, { useRef, useState } from "react";
import "../../App.css";
import "./NewsText";
import NewsBar from "./NewsBar";
import NewsBox from "./NewsBox";
import live from "assets/live.png";
import pizza1 from "assets/pizza1.png";
import styled from "@emotion/styled";

const Btn = styled.button`
  border-radius: 99px;
  border: 1px solid #ddd;
  padding: 5px 10px;
  cursor: pointer;
`;

const Blue = styled.div`
  color: blue;
  display: inline;
`;

const NewsDiv = styled.div`
  width: 829px;
  height: 426px;
  background-color: white;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const NewsHeader = styled.div`
  display: flex;
  gap: 7px;
  margin-left: 20px;
`;

const NewsBarBox = styled.div`
  width: 829px;
  height: 50px;
  display: flex;
  gap: 7px;
  align-items: center;
  margin-left: 20px;
  flex: 1;
`;


const LiveImg = styled.img`
  height: 23px;
  width: 50px;
  margin-top: 19px;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 5px;
  padding: 5px 5px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LeftBox = styled.div`
  float: left;
`;

const BottomBar = styled.div`
  width: 829px;
  height: 52px;
  border: 0.5px solid #ddd;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

const CountText = styled.p`
  margin: 0;
`;

const NewsTexts = styled.h4`
  color: gray;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: gray;
  }
`;

export default function News() {
  const [count, setCount] = useState(4);

  const inc = () => setCount((n) => Math.min(n + 1, 12));
  const dec = () => setCount((n) => Math.max(n - 1, 1));

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <>
      <NewsDiv>
        <NewsHeader>
          <NewsTexts>뉴스스탠드</NewsTexts>
          <NewsTexts>•</NewsTexts>
          <NewsTexts>언론사편집</NewsTexts>
          <NewsTexts>/</NewsTexts>
          <NewsTexts>엔터</NewsTexts>
          <NewsTexts>/</NewsTexts>
          <NewsTexts>스포츠</NewsTexts>
          <LiveImg src={live} />
          <NewsTexts>/</NewsTexts>
          <NewsTexts>경제</NewsTexts>
          <NewsTexts>/</NewsTexts>
          <NewsTexts>쇼핑투데이</NewsTexts>
        </NewsHeader>

        <NewsBarBox>
          <NewsBar />
        </NewsBarBox>

        <ScrollContainer ref={scrollRef}>
          <LeftBox>
            <NewsBox
              img={pizza1}
              title="피자나라 치킨 공주가 망햇다고 합니다"
              date="2025년 10월 31일"
            />
            <NewsBox
              img={pizza1}
              title="피자나라 치킨 공주가 망햇다고 합니다"
              date="2025년 10월 31일"
            />
          </LeftBox>

          <div>
            <NewsBox
              img={pizza1}
              title="피자나라 치킨 공주가 망햇다고 합니다"
              date="2025년 10월 31일"
            />
            <NewsBox
              img={pizza1}
              title="피자나라 치킨 공주가 망햇다고 합니다"
              date="2025년 10월 31일"
            />
          </div>
        </ScrollContainer>

        <BottomBar>
          <Btn onClick={dec}>◀</Btn>
          <CountText>
            <Blue>언론사</Blue> 더보기 {count}/12
          </CountText>
          <Btn onClick={inc}>▶</Btn>
        </BottomBar>
      </NewsDiv>
    </>
  );
}
