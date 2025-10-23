import React, { useState, useEffect } from "react";

function NewsBar() {

  const newsList = [
    "PNN · 피자 광장에 새로운 피자집이 개업했습니다.",
    "PNN · [중요] 피자박물관에 전시되어 있는 고대 피자가 도난당했습니다. 제보 부탁드립니다.",
    "PNN · 오늘은 피자 많이 먹기 대회가 열리는 날입니다. 피자광장으로 모입시다!",
    "PNN · [속보] 피자 협회에서 오늘은 피자 치즈의 날로 지정하기로 결정하였습니다."
  ];

  const [n, setNews] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNews(newIndex => (newIndex + 1) % newsList.length);
    }, 4000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <div style={{
        width: '790px', height: '50px',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px', display: 'flex',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        alignItems: 'center',
        gap: '7px'
      }}>
        <p style={{ whiteSpace: 'nowrap', marginLeft: '20px' }} > 분야별 뉴스 </p>
        <p style={{ whiteSpace: 'nowrap', }} > ▾ </p>

        <p style={{ whiteSpace: 'nowrap', color: '#dee2e6' }} > | </p>

        <div key={n} style={{ animation: "slideIn 0.5s ease-in-out", textAlign: 'center', fontSize: '14px' }}>
          {newsList[n]}
        </div>

        <div style = {{width:'40px', height:'30px', marginLeft:'auto', marginRight:'20px', marginTop:'5px'}}>
          <div>
            <a href="https://news.naver.com/" style={{fontSize: '14px' }}>
              뉴스홈
            </a>
          </div>
        </div>


        <style>
          {` @keyframes slideIn {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }`}
        </style>

      </div>
    </>
  )
}

export default NewsBar;