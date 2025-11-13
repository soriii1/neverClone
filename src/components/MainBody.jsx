import React from "react";
import MainLeft from "./Left/MainLeft";
import '../App.css';
import MainRight from "./MainRight";
import styled from "@emotion/styled";
import pizza2 from "assets/pizza5.jpeg";

const Bottom = styled.div`
  width: 1280px;
  height: 430px;
  background-color: #f4f4f4;
  flex-direction: column;
`;

const Img = styled.img`
  width: 160px;
  height: 100px;
  border-radius: 5px;
`;

const Btn = styled.button`
  width: 65px;
  height: 20px;
  border-radius: 5px;
  color: white;
  background-color: gray;
  border: 1px solid gray;
`;

const FooterContainer = styled.footer`
  border-top: 1px solid #e5e5e5;
  margin-top: 40px;
  padding: 30px 40px;
  background: #f4f4f4;
  font-size: 13px;
  color: #444;
`;

const NoticeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
  margin-bottom: 20px;

  h3 {
    font-size: 15px;
    font-weight: 600;
  }
`;

const MoreButton = styled.span`
  color: #666;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h4 {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 4px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  a {
    color: #555;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BottomSection = styled.div`
  margin-top: 25px;
  border-top: 1px solid #eee;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #777;
`;

const PolicyLinks = styled.div`
  a {
    color: #777;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CorpInfo = styled.div`
  font-weight: 500;
`;

const ScrollWrapper = styled.div`
  display: flex;
  gap: 5px;
  padding: 30px 0;
  overflow-x: auto;
`;

const ScrollItem = styled.div`
  display: flex;
  gap: 5px;
  min-width: 300px;
  flex-shrink: 0;
`;

const Bodyleft = styled.div`
  width: 830px;
  height: 2300px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const BodyRight =styled.div`
  width: 420px;
  border-radius: 20px;
  height: 2300px;
  background-color: rgb(255, 255, 255);
`;
const Box = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function MainBody() {
  return (
    <>
      <Box>
        <Bodyleft>
          <MainLeft />
        </Bodyleft>

        <BodyRight>
          <MainRight />
        </BodyRight>
      </Box>

      <Bottom>
        <ScrollWrapper>
          {[...Array(3)].map((_, idx) => (
            <ScrollItem key={idx}>
              <Img src={pizza2} />
              <div>
                <Btn>초록피자</Btn>
                <p>
                  <strong>버려진 박스 속 피자</strong>
                  <br />
                  따듯하던 피자가 차갑게 버려져있습니다
                </p>
              </div>
            </ScrollItem>
          ))}
        </ScrollWrapper>

        <FooterContainer>
          <NoticeSection>
            <h3>공지사항</h3>
            <MoreButton>서비스 전체보기 &gt;</MoreButton>
          </NoticeSection>

          <LinkSection>
            <div>
              <h4>Partners</h4>
              <Links>
                <a href="#">프로젝트 꽃</a>
                <a href="#">네이버 비즈니스</a>
                <a href="#">네이버 비즈니스 스쿨</a>
                <a href="#">네이버 광고 등록</a>
                <a href="#">스토어 개설</a>
                <a href="#">지역업체 등록</a>
                <a href="#">엑스퍼트 등록</a>
              </Links>
            </div>

            <div>
              <h4>Developers</h4>
              <Links>
                <a href="#">네이버 개발자 센터</a>
                <a href="#">오픈 API</a>
                <a href="#">오픈소스</a>
                <a href="#">네이버 D2</a>
                <a href="#">네이버 D2SF</a>
                <a href="#">네이버 랩스</a>
              </Links>
            </div>
          </LinkSection>

          <BottomSection>
            <PolicyLinks>
              <a href="#">회사소개</a> | <a href="#">인재채용</a> | <a href="#">제휴제안</a> |{" "}
              <a href="#">이용약관</a> | <strong><a href="#">개인정보처리방침</a></strong> |{" "}
              <a href="#">청소년보호정책</a> | <a href="#">네이버 정책</a> |{" "}
              <a href="#">고객센터</a>
            </PolicyLinks>

            <CorpInfo>© NAVER Corp.</CorpInfo>
          </BottomSection>
        </FooterContainer>
      </Bottom>
    </>
  );
}
