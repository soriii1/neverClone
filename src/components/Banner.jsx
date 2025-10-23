import React from "react";

function Banner ({url, w, h}) {
  return (
    <div>
      <a href="https://www.volvocar.co.kr/buy/purchase/volvo-nordic-camping-fest/?type=digital&source=naver&utm_medium=display&utm_source=naver&utm_campaign=kr_nordic_fest&utm_content=timeboard_1016pc_nordic">
        <img src={url} width={w} height={h} 
        style={{borderRadius:'10px'}}/>
      </a>
    </div>
  );
}

export default Banner;