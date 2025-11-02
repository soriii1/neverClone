import React from "react";
import styled from "@emotion/styled";
import "../App.css";
import pizza from "../assets/pizza8.png";

export default function Etc() {

  const Box = styled.div`
    width: 830px;
    min-height: 464px;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
  `;

  const Bottom = styled.div`
    width: 830px;
    height: 56px;
    background-color: rgb(255, 255, 255);
    text-align: center;
  
    border:1px solid #ddd;
    box-sizing: border-box;
    margin-top: 10px;
    line-height: 56px;
  `;

  const Top = styled.div`
    width: 830px;
    height: 58px;
    background-color: rgb(255, 255, 255);
    padding: 18px 20px 17px;
    border-radius: 10px;
    box-sizing: border-box;
  `;

  const AddBox = styled.div`
    flex: 0 0 calc(50% - 10px);
    height: 100px;
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px;
    border-radius: 5px;
    background-color: white;
    box-sizing: border-box;
  `;

  const Thumb = styled.img`
    width: 38%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    flex-shrink: 0;
    border:1px solid #ddd;
  `;

  const Desc = styled.div`
    margin: 0;
    font-size: 14px;
    display: flex;
    flex-direction: column; 
    gap: 20px; 
    width: 62%;
    
  `;

  const Color = styled.div`
    color: green;
    display:inline;
  `;

  const Gray = styled.p`
    color:gray;
    font-size:13px;
  `;


  return (
    <>
      <div style={{ width: '828px', height: '594px', border: '1px solid #ddd', marginTop: '15px', borderRadius: '10px', overflow: 'hidden' }}>
        <Top>
          <div style={{ display: 'flex', gap: '7px', marginLeft: '20px', flexWrap: 'wrap' }}>
            <h4 className="newsTexts">추천</h4>
            <h4 className="newsTexts">/</h4>
            <h4 className="newsTexts">카테크</h4>
            <h4 className="newsTexts">/</h4>
            <h4 className="newsTexts">웹툰</h4>
            <h4 className="newsTexts">/</h4>
            <h4 className="newsTexts">패션뷰티</h4>
            <h4 className="newsTexts">/</h4>
            <h4 className="newsTexts">리빙푸드</h4>
            <h4 className="newsTexts">/</h4>
            <h4 className="newsTexts">책방</h4>
            <h4 className="newsTexts">/</h4>
            <h4 className="newsTexts">지식</h4>
            <h4 className="newsTexts">/</h4>
            <h4 className="newsTexts">건강</h4>
            <h4 className="newsTexts">/</h4>
            <h4 className="newsTexts">게임</h4>
          </div>
        </Top>

        <Box>
          <AddBox>
            <Thumb src={pizza} />
            <Desc>
              이재모 피자 인간적으로 줄이 너무 길다
              <Gray> 맛집탐방 - pNN </Gray>
            </Desc>
          </AddBox>
          <AddBox>
            <Thumb src={pizza} />
            <Desc>
              이재모 피자 인간적으로 줄이 너무 길다
              <Gray> 맛집탐방 - pNN </Gray>
            </Desc>
          </AddBox>
          <AddBox>
            <Thumb src={pizza} />
            <Desc>
              이재모 피자 인간적으로 줄이 너무 길다
              <Gray> 맛집탐방 - pNN </Gray>
            </Desc>
          </AddBox>
          <AddBox>
            <Thumb src={pizza} />
            <Desc>
              이재모 피자 인간적으로 줄이 너무 길다
              <Gray> 맛집탐방 - pNN </Gray>
            </Desc>
          </AddBox>
          <AddBox>
            <Thumb src={pizza} />
            <Desc>
              이재모 피자 인간적으로 줄이 너무 길다
              <Gray> 맛집탐방 - pNN </Gray>
            </Desc>
          </AddBox>
          <AddBox>
            <Thumb src={pizza} />
            <Desc>
              이재모 피자 인간적으로 줄이 너무 길다
              <Gray> 맛집탐방 - pNN </Gray>
            </Desc>
          </AddBox>
          <AddBox>
            <Thumb src={pizza} />
            <Desc>
              이재모 피자 인간적으로 줄이 너무 길다
              <Gray> 맛집탐방 - pNN </Gray>
            </Desc>
          </AddBox>
          <AddBox>
            <Thumb src={pizza} />
            <Desc>
              이재모 피자 인간적으로 줄이 너무 길다
              <Gray> 맛집탐방 - pNN </Gray>
            </Desc>
          </AddBox>
        </Box>

        <Bottom>펼쳐보기 <Color> + </Color> </Bottom>

      </div>

    </>
  );
}
