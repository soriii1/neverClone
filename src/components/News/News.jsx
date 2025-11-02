import React, { useRef, useState } from "react";
import "../../App.css";
import "./NewsText";
import NewsBar from "./NewsBar";
import NewsBox from "./NewsBox";
import live from '../../assets/live.png';
import pizza1 from '../../assets/pizza1.png';
import styled from "@emotion/styled";



export default function News() {
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

  const [count, setCount] = useState(4);

  const inc = () => setCount(n => Math.min(n + 1, 12));
  const dec = () => setCount(n => Math.max(n - 1, 1));


  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <>
      <div style={{ width: '829px', height: '426px', backgroundColor: 'white', marginTop: '10px', borderRadius: '10px', border: '1px solid #d6d6d6', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '426px' }}>
        <div style={{ display: 'flex', gap: '7px', marginLeft: '20px' }}>
          <h4 className="newsTexts">뉴스스탠드</h4>
          <h4 className="newsTexts">•</h4>
          <h4 className="newsTexts">언론사편집</h4>
          <h4 className="newsTexts">/</h4>
          <h4 className="newsTexts">엔터</h4>
          <h4 className="newsTexts">/</h4>
          <h4 className="newsTexts">스포츠</h4>
          <img src={live} style={{ height: '23px', width: '50px', marginTop: '19px', }}></img>
          <h4 className="newsTexts">/</h4>
          <h4 className="newsTexts">경제</h4>
          <h4 className="newsTexts">/</h4>
          <h4 className="newsTexts">쇼핑투데이</h4>
        </div>

        <div style={{ width: '829px', height: '50px', display: 'flex', gap: '7px', alignItems: 'center', marginLeft: '20px', flex: '1' }}>
          <NewsBar />
        </div>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "5px",
            padding: "5px 5px",
            scrollbarWidth: "none",
          }}>
          <div style={{ float: 'left' }}>
            <NewsBox img={pizza1} title="피자나라 치킨 공주가 망햇다고 합니다" date="2025년 10월 31일" />
            <NewsBox img={pizza1} title="피자나라 치킨 공주가 망햇다고 합니다" date="2025년 10월 31일" />
          </div>

          <div>
            <NewsBox img={pizza1} title="피자나라 치킨 공주가 망햇다고 합니다" date="2025년 10월 31일" />
            <NewsBox img={pizza1} title="피자나라 치킨 공주가 망햇다고 합니다" date="2025년 10월 31일" />
          </div>

        </div>

        <div style={{ width: '829px', height: '52px', border: '0.5px solid #ddd', marginTop: "10px", display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
          <Btn onClick={dec}>◀</Btn>
          <p style={{ margin: 0 }}>
            <Blue>언론사</Blue> 더보기 {count}/12
          </p>
          <Btn onClick={inc}>▶</Btn>
        </div>

      </div >
    </>

  )
}

