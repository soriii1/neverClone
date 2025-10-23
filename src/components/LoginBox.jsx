
import React from "react";
import "../App.css";

function LoginBox() {
  return (
    <div className="login-box" href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/">
      <h3 className="login-title">네이버를 더 안전하고 편안하게 이용하세요</h3>
      <button className="login-btn"> <strong>NAVER</strong> 로그인</button>
      <div className="login-links">
        <a href="#">회원가입</a> | <a href="#">아이디 찾기</a> | <a href="#">비밀번호 찾기</a>
      </div>
    </div>
  );
}

export default LoginBox;
