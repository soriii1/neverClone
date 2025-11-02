import React, { useRef, useState } from "react";
import Banner from "./Banner.jsx";
import News from "../News/News.jsx";
import img from "../../assets/bannerImg.png";
import styled from "@emotion/styled";
import Etc from "../Etc.jsx";
import add1 from "../../assets/add1.png";
import micon1 from "../../assets/micon1.png";
import micon2 from "../../assets/micon2.png";
import micon3 from "../../assets/micon3.png";
import micon4 from "../../assets/micon4.png";
import Addd from "./Add.jsx";




export default function MainLeft() {

  const Box = styled.div`
    width: 829px;
    height: 560px;
    background-color:rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid #ddd;
    margin-top:15px;
    
  `;

  const Left = styled.div`
    width: 248px;
    height: 375px;
    background-color:rgb(255, 255, 255);
    border-radius: 10px;
    display:inline;
    padding: 0px 20px 1px;
  `;
  const Right = styled.div`
    width: 520px;
    margin-left: 10px;
    height: 375px;
   
    background-color:rgb(255, 255, 255);
    border-radius: 10px;
 
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    justify-content: space-between;
    align-content: flex-start;

  `;

  const Brands = styled.div`
    width: 248px;
    height: 88px;
    background-color:rgb(238, 238, 238);
    border-radius: 10px;
    border: 1px solid #ddd;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 5px;
    gap: 5px;
    font-size:13px;
    text-align:center;
  `;
  const Menu = styled.div`
    width: 248px;
    height: 74px;
    margin-top: 10px;
    background-color:rgb(238, 238, 238);
    border-radius: 10px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    font-size:14px;
    padding: 5px;
    justify-content: space-between;
  `;

  const MenuItem = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    width: 57px;
    height: 57px;
    font-size: 12px;
    text-align: center;
`;
  const MenuImg = styled.img`
    width: 24px;
    height: 24px;
    margin-bottom: 4px; // 이미지와 글자 사이 간격
`;

  const Add = styled.img`
    width: 258px;
    height: 146px;
    margin-top: 10px;
    background-color:rgb(238, 238, 238);
    border-radius: 10px;
    border: 1px solid rgb(215, 215, 215);
  `;
  const Btn = styled.button`
    border-radius: 99px;
    border: 1px solid #ddd;
    padding: 5px 10px;
    cursor: pointer;
`;

  const Blue = styled.div`
    color: #b85cfe;
    display: inline;
  `;

  const GrayBox = styled.div`
    width: 790px; 
    height: 50px;
    background-color: #f8f9fa;
    border-radius: 5px;
    display:flex;
    overflow: hidden;
    white-space: nowrap;
    align-items:center;
    gap: 7px;
    margin-top:20px;
    margin-left:20px;
    font-size:14px;
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
    <div>
      < Banner url={img} w="829px" h="130px" />
      < News />
      <Box>
        <div style={{ display: 'flex', gap: '7px', marginLeft: '20px' }}>
          <h4 className="newsTexts">쇼핑</h4>
          <h4 className="newsTexts">/</h4>
          <h4 className="newsTexts">맨즈</h4>
          <h4 className="newsTexts">/</h4>
          <h4 className="newsTexts">추천</h4>
          <h4 className="newsTexts">/</h4>
          <h4 className="newsTexts">핫딜</h4>
        </div>
        <div style={{ display: 'flex' }}>
          <Left>
            <Brands>
              쿠팡 G마켓 옥션 올리브영 <br></br>11번가 SSG닷컴 GSSHOP 하프클럽 <br></br>CJ온스타일 패션플러스 이마트몰
            </Brands>
            <Menu>
              <MenuItem>
                <MenuImg src={micon1} alt="마이쇼핑" />
                마이쇼핑
              </MenuItem>
              <MenuItem>
                <MenuImg src={micon2} alt="리뷰적립" />
                리뷰적립
              </MenuItem>
              <MenuItem>
                <MenuImg src={micon3} alt="주문" />
                주문
              </MenuItem>
              <MenuItem>
                <MenuImg src={micon4} alt="장바구니" />
                장바구니
              </MenuItem>

            </Menu>
            <Add src={add1}>
            </Add>
            <p style={{ textAlign: 'center', fontSize: '14px' }}> 주름, 지방, 다크서클까지! </p>
          </Left>
          <Right>
            <Addd img={micon1} text="안녕하세요 반갑습니다" />
            <Addd img={micon1} text="안녕하세요 반갑습니다" />
            <Addd img={micon1} text="안녕하세요 반갑습니다" />
            <Addd img={micon1} text="안녕하세요" />
            <Addd img={micon1} text="안녕하세요" />
            <Addd img={micon1} text="안녕하세요 반갑습니다" />
            <Addd img={micon1} text="안녕하세요 반갑습니다" />
            <Addd img={micon1} text="안녕하세요 반갑습니다" />
            <Addd img={micon1} text="안녕하세요" />
            <Addd img={micon1} text="안녕하세요" />

          </Right>
        </div>

        <GrayBox>
          <p style={{ whiteSpace: 'nowrap', marginLeft: '20px' }} > 오늘의 혜택 • </p>
          <p style={{ whiteSpace: 'nowrap', }} > 단 7일! 올리브영 블랙프라이데이 <Blue>~60%</Blue> + 앱/매장 선착순 랜덤 쿠폰</p>
        </GrayBox>

        <div style={{ width: '829px', height: '52px', border: '0.5px solid #ddd', marginBottom: '0px', display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
          <Btn onClick={dec}>◀</Btn>
          <p style={{ margin: 0 }}>
            <Blue>쇼핑아이템</Blue> 더보기 {count}/12
          </p>
          <Btn onClick={inc}>▶</Btn>
        </div>
      </Box>

      <Etc />

    </div>
  )
}
