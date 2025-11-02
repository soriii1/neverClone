import React from "react";
import MainLeft from "./Left/MainLeft";
import '../App.css';
import MainRight from "./MainRight";
import styled from "@emotion/styled";
import pizza2 from "../assets/pizza5.jpeg";

export default function MainBody() {

  const Bottom = styled.div`
    width:1280px;
    height:430px;
    background-color:#f4f4f4;
    flex-direction: column;
  `;

  const Img = styled.img`
    width:160px;
    height:100px;
    border-radius: 5px;
  `;

  const Btn = styled.button`
    width:65px;
    height:20px;
    border-radius: 5px;
    color:white;
    background-color:gray;
    border: 1px solid gray;
  `;
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', }}>
        <div className="bodyleft">
          < MainLeft />
        </div>

        <div className="bodyright">
          <MainRight />
        </div>
      </div>

      <Bottom>

        <div style={{ display: 'flex', gap: '5px', padding: '30px 0px', overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: '5px', minWidth: '300px', flexShrink: 0 }}>
            <Img src={pizza2} />
            <div>
              <Btn>초록피자</Btn>
              <p><strong>버려진 박스 속 피자</strong><br />따듯하던 피자가 차갑게 버려져있습니다</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '5px', minWidth: '300px', flexShrink: 0 }}>
            <Img src={pizza2} />
            <div>
              <Btn>초록피자</Btn>
              <p><strong>버려진 박스 속 피자</strong><br />따듯하던 피자가 차갑게 버려져있습니다</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '5px', minWidth: '300px', flexShrink: 0 }}>
            <Img src={pizza2} />
            <div>
              <Btn>초록피자</Btn>
              <p><strong>버려진 박스 속 피자</strong><br />따듯하던 피자가 차갑게 버려져있습니다</p>
            </div>
          </div>
        </div>


        <div style={{ display: 'flex', gap: '150px', padding: '20px 0px', borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
          <p><strong>공지사항</strong></p>
          <p style={{ marginLeft: '950px' }}><strong>서비스 전체보기</strong></p>
        </div>
      </Bottom>




    </>


  )
}

