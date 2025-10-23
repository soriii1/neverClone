import React, { useRef, useState } from "react";
import "../App.css";
import "./NewsText";
import "./NewsBar";
import NewsBar from "./NewsBar";
import "./NewsBox";
import NewsBox from "./NewsBox";

function News() {
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
      <div style={{ width: '829px', height: '426px', backgroundColor: 'white', marginTop: '10px', borderRadius: '10px', border: '1px solid gray', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '426px' }}>
        <div style={{ display: 'flex', gap: '7px', marginLeft: '20px' }}>
          <h4 class="newsTexts">뉴스스탠드</h4>
          <h4 class="newsTexts">•</h4>
          <h4 class="newsTexts">언론사편집</h4>
          <h4 class="newsTexts">/</h4>
          <h4 class="newsTexts">엔터</h4>
          <h4 class="newsTexts">/</h4>
          <h4 class="newsTexts">스포츠</h4>
          <img src="live.png" style={{ height: '23px', width: '50px', marginTop: '19px', }}></img>
          <h4 class="newsTexts">/</h4>
          <h4 class="newsTexts">경제</h4>
          <h4 class="newsTexts">/</h4>
          <h4 class="newsTexts">쇼핑투데이</h4>
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
            <NewsBox img="pizza1.png" title="피자나라 치킨 공주가 망햇다고 합니다" date="2025년 10월 31일" />
            <NewsBox img="pizza1.png" title="피자나라 치킨 공주가 망햇다고 합니다" date="2025년 10월 31일" />
          </div>

          <div>
            <NewsBox img="pizza1.png" title="피자나라 치킨 공주가 망햇다고 합니다" date="2025년 10월 31일" />
            <NewsBox img="pizza1.png" title="피자나라 치킨 공주가 망햇다고 합니다" date="2025년 10월 31일" />
          </div>

        </div>

        <div style={{ width: '829px', height: '52px', border: '0.5px solid gray', marginTop: "10px", display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
          <button onClick={dec}>◀</button>
            <p style={{ margin: 0 }}>
              언론사 더보기 {count}/12
            </p>
          <button onClick={inc}>▶</button>
        </div>


    </div >
    </>

  )
}

export default News;