import React from "react";

export default function Banner ({url, w, h}) {
  return (
    <div>
      <a onClick={()=>window.location.href="https://www.volvocar.co.kr/buy/purchase/volvo-nordic-camping-fest/?type=digital&source=naver&utm_medium=display&utm_source=naver&utm_campaign=kr_nordic_fest&utm_content=timeboard_1016pc_nordic"}>
        <img src={url} width={w} height={h} 
        style={{borderRadius:'10px', border: "1px solid #d0d0d0"}}/>
      </a>
    </div>
  );
}

