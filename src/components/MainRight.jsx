import React from "react";
import LoginBox from "./LoginBox";
import d from "assets/d.png";
import ggg from "assets/ggg.jpg";
import pizza2 from "assets/pizza5.jpeg";
import pizza1 from "assets/pizza6.jpeg";
import wea from "assets/weather.png";
import snack from "assets/snack.png";
import calendar from 'assets/calendar.png';
import naver from 'assets/naver.png';
import styled from "@emotion/styled";

const Container = styled.div``;

const Banner = styled.div`
  background-color: white;
  width: 420px;
  height: 240px;
  border-radius: 10px;
  margin-top: 10px;
  overflow: hidden;
  cursor: pointer;
`;
const BannerImg = styled.img`
  width: 420px;
  height: 240px;
  border-radius: 10px;
`;
const AdImg = styled.img`
  width: 420px;
  height: 80px;
  margin-top: 15px;
  border-radius: 10px;
`;

const Items = styled.div`
  width: 420px;
  height: 172px;
  background-color: white;
  margin-top: 10px;
  display: flex;
  border-radius: 10px;
  border: 1px solid #ddd;
`;
const ItemLeft = styled.div`
  width: 80px;
  height: 136px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Text = styled.p`
  font-size: 20px;
`;
const ADButton = styled.button`
  background-color: white;
  border: 0.5px solid gray;
  margin-top: 5px;
  cursor: pointer;
`;
const ItemImgWrapper = styled.div`
  width: 90px;
  height: 136px;
  margin-left: 10px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 5px;
`;

const Box = styled.div`
  width: 420px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin-top: 15px;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
`;
const Btn = styled.button`
  width: 75px;
  height: 26px;
  margin-top: 10px;
  border-radius: 20px;
  background-color: white;
  border: 1.5px solid gray;
  cursor: pointer;
`;
const Tex = styled.p`
  color: gray;
  font-size: 15px;
`;
const Divider = styled.p`
  color: #ddd;
  text-align: center;
  margin: 0;
`;
const WeatherBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
`;
const WeatherLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;
const WeatherTemp = styled.span`
  font-size: 22px;
  font-weight: bold;
`;
const WeatherDesc = styled.span`
  color: gray;
  font-size: 14px;
`;
const StockBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
`;
const StockItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
`;
const StockName = styled.span`
  font-size: 14px;
  color: gray;
`;
const StockValue = styled.span`
  font-weight: bold;
`;
const Up = styled.span`
  color: red;
`;
const Down = styled.span`
  color: blue;
`;

const Newbox = styled.div`
  width: 420px;
  background-color: white;
  margin-top: 15px;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
  padding-bottom: 10px;
`;
const NewboxTop = styled.div`
  display: flex;
  margin-left: 14px;
  align-items: center;
`;
const NewboxBtn = styled.button`
  width: 30px;
  height: 20px;
  background-color: white;
  border: 0.5px solid gray;
  margin-left: 5px;
  cursor: pointer;
`;
const SnackRow = styled.div`
  display: flex;
  margin-left: 14px;
  align-items: flex-start;
`;
const SnackImg = styled.img`
  width: 195px;
  height: 130px;
  margin-left: 5px;
  border: 1px solid gray;
  border-radius: 10px;
`;
const SnackDesc = styled.p`
  margin-left: 5px;
  text-align: center;
  margin-top: 50px;
`;
const SnackTitle = styled.p`
  font-size: 14px;
  margin-left: 19px;
  color: gray;
`;

const WidgetBoard = styled.div`
  width: 420px;
  height: 516px;
  background-color: #f1f0f0;
  margin-top: 15px;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const WidgetTitle = styled.p`
  font-size: 17px;
  margin-left: 20px;
  margin-top: 20px;
  font-weight: bold;
`;

const Calender = styled.div`
  width: 384px;
  height: 192px;
  background-color: white;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
  padding: 5px;
`;

const CalTitle = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin: 0 0 5px 20px;
`;

const CalDateRow = styled.div`
  display: flex;
  align-items: center;
`;

const CalDate = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin: 0 5px 0 20px;
`;
const CalDay = styled.p`
  margin: 0;
  font-weight: normal;
`;
const CalImg = styled.img`
  width: 177px;
  height: 134px;
  margin-left: auto;
  margin-right: 20px;
`;
const CalImageRow = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;
const CalImgSmall = styled.img`
  width: 108px;
  height: 124px;
  border-radius: 5px;
`;

const Last = styled.div`
  width: 420px;
  height: 80px;
  background-color: white;
  margin-top: 15px;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
`;
const LastContent = styled.div`
  width: 300px;
  height: 64px;
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  gap: 10px;
  align-items: center;
`;
const LastImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
`;
const LastText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.2;
`;

export default function MainRight() {
 

  const itemsData = [
    { img: pizza2, text: "고르곤졸라 피자 냐미!" },
    { img: pizza2, text: "고르곤졸라 피자" },
    { img: pizza2, text: "고르곤졸라 피자" },
  ];

  return (
    <Container>
      <LoginBox />
      <Banner onClick={() => window.location.href = "https://xn--zo5btno5cba414dnzcmzg.com/?utm_source=naver&utm_medium=roll&utm_campaign=naver_roll"}>
        <BannerImg src={ggg} />
      </Banner>
      <AdImg src={d} />
      <Items>
        <ItemLeft>
          <Text><strong>요즘 <br />관심 받는<br /> 아이템</strong></Text>
          <ADButton>AD</ADButton>
        </ItemLeft>
        {itemsData.map((item, index) => (
          <ItemImgWrapper key={index}>
            <Img src={item.img} />
            <p>{item.text}</p>
          </ItemImgWrapper>
        ))}
      </Items>

      <Box>
        <TitleBox>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <p><strong>날씨</strong></p>
            <Btn>예보 비교</Btn>
          </div>
          <Tex>부산 사상구</Tex>
        </TitleBox>
        <Divider>━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Divider>
        <WeatherBox>
          <WeatherLeft>
            <Img src={wea} />
            <WeatherInfo>
              <WeatherTemp>17°</WeatherTemp>
              <WeatherDesc>맑음</WeatherDesc>
            </WeatherInfo>
          </WeatherLeft>
          <WeatherDesc>미세먼지 보통</WeatherDesc>
        </WeatherBox>
      </Box>

      <Box>
        <TitleBox>
          <p><strong>증시</strong></p>
          <Tex>11.02 15:23</Tex>
        </TitleBox>
        <Divider>━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Divider>
        <StockBox>
          <StockItem>
            <StockName>KOSPI</StockName>
            <StockValue>2,527.43</StockValue>
            <Down>-3.24 ▼</Down>
          </StockItem>
          <StockItem>
            <StockName>KOSDAQ</StockName>
            <StockValue>842.17</StockValue>
            <Up>+2.18 ▲</Up>
          </StockItem>
          <StockItem>
            <StockName>USD</StockName>
            <StockValue>1,359.50</StockValue>
            <Down>-1.20 ▼</Down>
          </StockItem>
        </StockBox>
      </Box>

      <Newbox>
        <NewboxTop>
          <p><strong>사무실 탕비실 스낵바! 간식 걱정 끝!</strong></p>
          <NewboxBtn>AD</NewboxBtn>
        </NewboxTop>
        <SnackRow>
          <SnackImg src={snack} />
          <SnackDesc>부장님부터 신입사원까지 모두 좋아하는 과자세트</SnackDesc>
        </SnackRow>
        <SnackTitle>어쩌구 과자 가게</SnackTitle>
      </Newbox>

      <WidgetBoard>
        <WidgetTitle>위젯보드</WidgetTitle>
        <Calender>
          <CalTitle>캘린더</CalTitle>
          <CalDateRow>
            <CalDate>11.2</CalDate>
            <CalDay>월</CalDay>
            <CalImg src={calendar} />
          </CalDateRow>
        </Calender>
        <Calender>
          <CalTitle>VIBE 배드타임ASMR</CalTitle>
          <CalImageRow>
            <CalImgSmall src={pizza1} />
            <CalImgSmall src={pizza1} />
            <CalImgSmall src={pizza1} />
          </CalImageRow>
        </Calender>
      </WidgetBoard>

      <Last>
        <LastContent>
          <LastImg src={pizza2} />
          <LastText>
            <strong>새로운 피자가게가 열렸습니다!</strong> <br />
            그 가게의 새로운 피자를 평가하세요
          </LastText>
        </LastContent>
      </Last>
    </Container>
  );
}
