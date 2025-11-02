import React from "react";
import LoginBox from "./LoginBox";
import d from "../assets/d.png";
import ggg from "../assets/ggg.jpg";
import styled from "@emotion/styled";
import pizza2 from "../assets/pizza5.jpeg";
import pizza1 from "../assets/pizza6.jpeg";
import wea from "../assets/weather.png";
import snack from "../assets/snack.png";
import calendar from '../assets/calendar.png';
import naver from '../assets/naver.png';

export default function MainRight() {

  const Items = styled.div`
    width:420px;
    height:172px;
    background-color: white;
    margin-top:10px;
    display:flex;
    border-radius:10px;
    border: 1px solid #ddd;
  `;

  const Text = styled.p`
    font-size:20px;  

  `;

  const Img = styled.img`
    width:90px;
    height:90px;
  `;

  const Box = styled.div`
    width:420px;
    height:236px;
    background-color: white;
    margin-top:15px;
    border-radius:10px;
    border: 1px solid #ddd;
  `;

  const TitleBox = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    width: 100%;
    box-sizing: border-box; 

  `;

  const Btn = styled.button`
    width:75px;
    height:26px;
    margin-top:10px;
    border-radius:20px;
    background-color:white; 
    border:1.5px solid gray;
  `;

  const Tex = styled.p`
    color:gray;
    font-size:15px
    margin-left: auto;
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
    width:420px;
    height:240px;
    background-color:white;
    margin-top:15px;
    border-radius:10px;
    border:1px solid #d6d6d6;
  `;

  const WidgetBoard = styled.div`
    width:420px;
    height:516px;
    background-color: #f1f0f0;
    margin-top:15px;
    border-radius:10px;
    border:1px solid #d6d6d6;
  `;

  const Calender = styled.div`
    width:384px;
    height:192px;
    background-color:white;
    margin-left:20px;
    margin-top:10px;
    border-radius:10px;
    border:1px solid #d6d6d6;

  `;

  const Cal = styled.img`
    width:177px;
    height:134px;
    margin-left:80px;

 `;

  const Last = styled.div`
    width: 420px;
    height:80px;
    background-color:white;
    margin-top:15px;
    border-radius:10px;
    border:1px solid #d6d6d6;
 `;



  return (
    <>
      <div>
        <LoginBox />
      </div>
      <div style={{ backgroundColor: 'white', width: '420px', height: '240px', borderRadius: '10px', marginTop: '10px' }}>
        <a onClick={() => window.location.href = "https://xn--zo5btno5cba414dnzcmzg.com/?utm_source=naver&utm_medium=roll&utm_campaign=naver_roll"}>
          <img src={ggg} style={{ width: '420px', height: '240px', borderRadius: '10px' }}></img></a>
      </div>
      <div>
        <img src={d} style={{ width: '420px', height: '80px', marginTop: '15px', borderRadius: '10px', textAlign: 'center' }}></img>
      </div>

      <Items>
        <div style={{ width: '80px', height: '136px', marginLeft: '20px', paddingTop: '0px' }}>
          <Text> <strong>요즘 <br></br>관심 받는<br></br> 아이템</strong> </Text>
          <button style={{ backgroundColor: 'white', border: '0.5px solid gray', marginTop: '5px' }}>AD</button>
        </div>

        <div style={{ width: '90px', height: '136px', marginLeft: '10px', paddingTop: '15px' }}>
          <Img src={pizza2}></Img>
          <p>고르곤졸라 피자 냐미! </p>
        </div>
        <div style={{ width: '90px', height: '136px', marginLeft: '10px', paddingTop: '15px' }}>
          <Img src={pizza2}></Img>
          <p>고르곤졸라 피자  </p>
        </div>
        <div style={{ width: '90px', height: '136px', marginLeft: '10px', paddingTop: '15px' }}>
          <Img src={pizza2}></Img>
          <p>고르곤졸라 피자  </p>
        </div>
      </Items>


      <Box>
        <TitleBox>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <p><strong>날씨</strong></p>
            <Btn>예보 비교</Btn>
          </div>
          <Tex>부산 사상구</Tex>
        </TitleBox>

        <p style={{ color: '#ddd', textAlign: 'center' }}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>

        <WeatherBox>
          <WeatherLeft>
            <img src={wea} alt="맑음" width="80" />
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

        <p style={{ color: '#ddd', textAlign: 'center' }}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>

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
        <div style={{ display: 'flex', marginLeft: '14px' }}>
          <p><strong>사무실 탕비실 스낵바! 간식 걱정 끝!</strong></p>
          <button style={{ width: '30px', height: '20px', backgroundColor: 'white', border: '0.5px solid gray', marginTop: '15px', marginLeft: '5px' }}>AD</button>
        </div>
        <div style={{ display: 'flex', marginLeft: '14px' }}>
          <img src={snack} style={{ width: '195px', height: '130px', marginLeft: '5px', border: '1px solid gray', borderRadius: '10px' }}></img>
          <p style={{ marginLeft: '5px', textAlign: 'center', marginTop: '50px' }}> 부장님부터 신입사원까지 모두 좋아하는 과자세트 </p>
        </div>
        <p style={{ fontSize: '14px', marginLeft: '19px', color: 'gray' }}> 어쩌구 과자 가게 </p>

      </Newbox>

      <WidgetBoard>
        <div style={{ marginLeft: '20px', marginTop: '20px' }}>
          <p><strong>위젯보드</strong></p>
        </div>
        <Calender>
          <div>
            <p style={{ fontSize: '17px', marginLeft: '20px' }} ><strong>캘린더</strong></p>
          </div>
          <div style={{ display: 'flex' }}>
            <p style={{ fontSize: '40px', marginLeft: '20px', marginTop: '0px' }}><strong>11.2</strong></p>
            <p style={{ marginLeft: '5px' }}> 월 </p>
            <Cal src={calendar}></Cal>
          </div>
        </Calender>

        <Calender>
          <div style={{}}>
            <p style={{ fontSize: '17px', marginLeft: '20px' }} ><strong> VIBE 배드타임ASMR</strong></p>
          </div>
          <div style={{ display: 'flex', gap: '10px', marginLeft: '20px', marginTop: '0px' }}>
            <img src={pizza1} style={{ width: '108px', height: '124px', borderRadius: '5px', position: 'relative' }}></img>
            <img src={pizza1} style={{ width: '108px', height: '124px', borderRadius: '5px', position: 'relative' }}></img>
            <img src={pizza1} style={{ width: '108px', height: '124px', borderRadius: '5px', position: 'relative' }}></img>
          </div>
        </Calender>
        <div style={{ width: '420', height: '65px' }}>
          <div style={{ display: 'flex', marginLeft: '25px', marginTop: '20px', textAlign: 'center', gap: '5px' }}>
            <img src={naver} style={{ width: '22', height: '22px' }}></img>
            <strong>모바일 네이버 메인</strong> 열기
          </div>
        </div>

      </WidgetBoard>

      <Last>
        <div style={{ width: '300px', height: '64px', display: 'flex', marginLeft: '20px', marginTop: '20px', gap: '10px' }}>
          <img src={pizza2} style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}></img>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.2 }}>
            <strong>새로운 피자가게가 열렸습니다!</strong> <br />
            그 가게의 새로운 피자를 평가하세요
          </p>
        </div>
      </Last>



    </>



  )
}

