import React from "react";
import styled from "@emotion/styled";

const Img = styled.img`
  border-radius:10px;
  brder: 1px solid #d0d0d0;
`;

export default function Banner ({url, w, h}) {
  return (
    <div>
      <a onClick={()=>window.location.href="https://www.volvocar.co.kr/buy/purchase/volvo-nordic-camping-fest/?type=digital&source=naver&utm_medium=display&utm_source=naver&utm_campaign=kr_nordic_fest&utm_content=timeboard_1016pc_nordic"}>
        <Img src={url} width={w} height={h} />
      </a>
    </div>
  );
}

