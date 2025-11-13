import React from 'react';
import '../../App.css';
import Linked from './Linked';
import N from "assets/N.png";
import key from "assets/key.png";
import what from "assets/what.png";
import mail from "assets/mail.png";
import cafe from "assets/cafe.png";
import blog from "assets/blog.png";
import store from "assets/store.png";
import news from "assets/news.png";
import stock from "assets/stock.png";
import home from "assets/home.png";
import map from "assets/map.png";
import webtoon from "assets/webtoon.png";
import chzi from "assets/chzi.png";
import more from "assets/more.png";
import styled from '@emotion/styled';


const SearchBarBox = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  width: 706px;
  height: 60px;
  margin: 0 auto;
  border: 1px solid #03C75A;
  border-radius: 40px;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  &:hover{
    box-shadow: 0px 3px 10px rgba(0,0,0,0.15);
  }
`;
const SearchLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`;

const Naver = styled.img`
  width: 45px;
  height: 43px;
`;

const Input = styled.input`
  flex: 1;                    
  margin: 0 10px; 
  padding: 8px 10px;
  font-size: 20px;
  border: none;
  outline: none;
  &::placeholder {
    color: #d7d7d7;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:focus::placeholder {
    opacity: 1;
  }
`;

const SearchIcons = styled.div`
  isplay: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img`
  width: 50px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s ease;
`;

const LinkBox = styled.div`
  width: 676px;
  height: 86px;
  background-color: #03C75A;

  margin-top: 10px;
  margin: 10px auto 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around; 
`;



export default function Search() {
  return (
    <>
      <SearchBarBox >

        <SearchLogo>
          <Naver src={N} alt="네이버 로고" />
        </SearchLogo>

        <Input type="text" placeholder="검색어를 입력해 주세요" />

        <SearchIcons>
          <Icon src={key}  />
          <Icon src={what}  />
        </SearchIcons>
      </SearchBarBox>
      <LinkBox>
        < Linked name="메일" url="https://mail.naver.com/" img={mail} />
        < Linked name="카페" url="https://mail.naver.com/" img={cafe} />
        < Linked name="블로그" url="https://ader.naver.com/v1/KxKBC6TsVfwpR6uAkCkmIhsIBGLuXhWbYVkccnDa4WqRleuUrtNnsVXt2rQxMXrk06x17ht8Em0fb1dqVKwF5LyiirfvJfStgoshD7jTNKhfKTo6Teh3FUlO6ld5ewkWNQ7p1bG8kmRJTh738N8RRm0Tdz4QMvr4Dl17fo-yXMQ1-dQKttijjiO1YDCvvbCLvIdYOfT-3OJ1TpTdJl-Wk8y1Hv0dsmfcn8eNArOuJlS-wHSe2pLotzIh7mVm5d1cIl_fJZjc8wlzJpQdEu4DVw4DGPAc5B2j_bchJCnAr4esVLkF2q-RddNi6m9t0lI0910jeYxBg9zhoX3q8EbhoA==?c=naver.search.pc.brand&t=0" img={blog} />
        < Linked name="스토어" url="https://shopping.naver.com/ns/home" img={store} />
        < Linked name="뉴스" url="https://news.naver.com/" img={news} />
        < Linked name="증권" url="https://finance.naver.com/" img={stock} />
        < Linked name="부동산" url="https://land.naver.com/" img={home} />
        < Linked name="지도" url="https://map.naver.com/" img={map} />
        < Linked name="웹툰" url="https://comic.naver.com/" img={webtoon} />
        < Linked name="치지직" url="https://ader.naver.com/v1/lltqN50Sly7xPzwcyKIi8cSEWRLtUYOFet-BwXFfQLamjcJ6grILSzeb40wd1usu5OfE657rsB-ec8eVQPDMHiA-6dUgLCi5ishIIuXBM5kXH4shvN_TzJOJ9a1_snttu7qs-S9dDqZNBo3hsvuLZjMjntTlNq8m6vnMxad8AHYJIdAvHBaPIh8CeaMjdpHsCIFgNN5wOjG2WnOvdQHqJ4bzjq6kTBn2KbyqtPeBsQQQaxTKibhOSveEQlUy2Aq3EjU24z4fRUAuIcDgHpdSUjQsItD-f8XPBWV_QEZlpdKaCeAr92AtRRzMDhy6uI9Ztk9yUptzydy0lDvDJyve9w==?c=naver.search.pc.brand&t=0" img={chzi} />
        < Linked name="ㅤ" url="https://www.naver.com/" img={more} />
      </LinkBox>
    </>

  );
}


