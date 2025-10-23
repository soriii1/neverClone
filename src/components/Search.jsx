import React from 'react';
import '../App.css';
import Linked from './Linked';


function Search() {
  return (
    <>
      <div className="searchBar">

        <div className="searchLogo">
          <img src="N.png" className="N" alt="네이버 로고" />
        </div>

        <input type="text" className="input" placeholder="검색어를 입력해 주세요"/>

        <div className="searchIcons">
          <img src="key.png" className="icon" />
          <img src="what.png" className="icon" />
        </div>
      </div>
      <div className="LinkBox">
        < Linked name="메일" url="https://mail.naver.com/" img="mail.png"/>
        < Linked name="카페" url="https://mail.naver.com/" img="cafe.png"/>
        < Linked name="블로그" url="https://ader.naver.com/v1/KxKBC6TsVfwpR6uAkCkmIhsIBGLuXhWbYVkccnDa4WqRleuUrtNnsVXt2rQxMXrk06x17ht8Em0fb1dqVKwF5LyiirfvJfStgoshD7jTNKhfKTo6Teh3FUlO6ld5ewkWNQ7p1bG8kmRJTh738N8RRm0Tdz4QMvr4Dl17fo-yXMQ1-dQKttijjiO1YDCvvbCLvIdYOfT-3OJ1TpTdJl-Wk8y1Hv0dsmfcn8eNArOuJlS-wHSe2pLotzIh7mVm5d1cIl_fJZjc8wlzJpQdEu4DVw4DGPAc5B2j_bchJCnAr4esVLkF2q-RddNi6m9t0lI0910jeYxBg9zhoX3q8EbhoA==?c=naver.search.pc.brand&t=0" img="blog.png"/>
        < Linked name="스토어" url="https://shopping.naver.com/ns/home" img="store.png"/>
        < Linked name="뉴스" url="https://news.naver.com/" img="news.png"/>
        < Linked name="증권" url="https://finance.naver.com/" img="stock.png"/>
        < Linked name="부동산" url="https://land.naver.com/" img="home.png"/>
        < Linked name="지도" url="https://map.naver.com/" img="map.png"/>
        < Linked name="웹툰" url="https://comic.naver.com/" img="webtoon.png"/>
        < Linked name="치지직" url="https://ader.naver.com/v1/lltqN50Sly7xPzwcyKIi8cSEWRLtUYOFet-BwXFfQLamjcJ6grILSzeb40wd1usu5OfE657rsB-ec8eVQPDMHiA-6dUgLCi5ishIIuXBM5kXH4shvN_TzJOJ9a1_snttu7qs-S9dDqZNBo3hsvuLZjMjntTlNq8m6vnMxad8AHYJIdAvHBaPIh8CeaMjdpHsCIFgNN5wOjG2WnOvdQHqJ4bzjq6kTBn2KbyqtPeBsQQQaxTKibhOSveEQlUy2Aq3EjU24z4fRUAuIcDgHpdSUjQsItD-f8XPBWV_QEZlpdKaCeAr92AtRRzMDhy6uI9Ztk9yUptzydy0lDvDJyve9w==?c=naver.search.pc.brand&t=0" img="chzi.png"/>
        < Linked name="ㅤ" url="https://www.naver.com/" img="more.png"/>
      </div>
    </>
    
  );
}

export default Search;
