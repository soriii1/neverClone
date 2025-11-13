import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const BarContainer = styled.div`
  width: 790px;
  height: 50px;
  background-color: #f8f9fa;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;
  gap: 7px;
`;

const Label = styled.p`
  white-space: nowrap;
  margin-left: 20px;
`;

const Arrow = styled.p`
  white-space: nowrap;
`;

const Divider = styled.p`
  white-space: nowrap;
  color: #dee2e6;
`;

const NewsText = styled.div`
  animation: slideIn 0.5s ease-in-out;
  text-align: center;
  font-size: 14px;

  @keyframes slideIn {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const RightBox = styled.div`
  width: 40px;
  height: 30px;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 5px;
`;

const NewsHomeLink = styled.a`
  font-size: 14px;
  cursor: pointer;
`;

export default function NewsBar() {
  const newsHome = () => {
    window.location.href = "https://news.naver.com/";
  };

  const newsList = [
    "PNN · 피자 광장에 새로운 피자집이 개업했습니다.",
    "PNN · [중요] 피자박물관에 전시되어 있는 고대 피자가 도난당했습니다. 제보 부탁드립니다.",
    "PNN · 오늘은 피자 많이 먹기 대회가 열리는 날입니다. 피자광장으로 모입시다!",
    "PNN · [속보] 피자 협회에서 오늘은 피자 치즈의 날로 지정하기로 결정하였습니다.",
  ];

  const [n, setNews] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNews((newIndex) => (newIndex + 1) % newsList.length);
    }, 4000);
    return () => clearInterval(timer);
  });

  return (
    <BarContainer>
      <Label>분야별 뉴스</Label>
      <Arrow>▾</Arrow>
      <Divider>|</Divider>

      <NewsText key={n}>{newsList[n]}</NewsText>

      <RightBox>
        <div>
          <NewsHomeLink onClick={newsHome}>뉴스홈</NewsHomeLink>
        </div>
      </RightBox>
    </BarContainer>
  );
}
