import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const MenuLink = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;

  &:hover {
    color: #22b8cf;
  }

  &:after {
    content: "|";
    display: inline-block;
    padding: 0 7px;
    color: #ccc;
  }

  &:last-child {
    &:after {
      color: #fff;
    }
  }

  &.active {
    text-decoration: underline;
    color: #22b8cf;
    &:after {
      border-bottom: 4px solid #fff !important;
    }
  }
`;

const Top = () => {
  // HTML 태그에 접근할 수 있는 참조변수를 생성
  const inputQuery = React.useRef();

  // 검색어 상태변수 -> 기본값은 빈 문자열
  const [query, setQuery] = React.useState("");

  // 페이지 강제 이동 함수 생성
  const navigate = useNavigate();

  // 검색폼에 대한 이벤트 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    //input택의 입력값 가져오기
    const value = inputQuery.current.value;

    if (!value) {
      inputQuery.current.focus();
      alert("검색어를 입력하세요.");
      return;
    }

    // 입력된 검색어를 상태변수에 등록한다
    setQuery(value);

    // 웹 검색 페이지로 강제이동
    navigate(`/web?query=${encodeURIComponent(value)}`);
  };
  return (
    <div>
      <h1>카카오 검색</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="search" name="query" ref={inputQuery} />
        <button type="submit">검색</button>
      </form>
      <hr />
      <nav>
        <MenuLink to={`/web?query=${encodeURIComponent(query)}`}>웹</MenuLink>
        <MenuLink to={`/image?query=${encodeURIComponent(query)}`}>
          이미지
        </MenuLink>
        <MenuLink to={`/blog?query=${encodeURIComponent(query)}`}>
          블로그
        </MenuLink>
        <MenuLink to={`/cafe?query=${encodeURIComponent(query)}`}>
          카페
        </MenuLink>
        <MenuLink to={`/book?query=${encodeURIComponent(query)}`}>책</MenuLink>
      </nav>
    </div>
  );
};

export default Top;
