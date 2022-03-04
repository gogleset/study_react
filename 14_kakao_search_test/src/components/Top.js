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
`;

const Top = () => {
  // 1-1) HTML 태그에 접근할 수 있는 참조변수를 생성
  const inputQuery = React.useRef();
  // 2-1) 검색어 상태변수 -> 기본값은 빈 문자열
  const [query, setQuery] = React.useState("");

  // 3-1) 페이지 강제 이동 함수 생성
  const navigate = useNavigate();

  // 4-1) 검색 폼에대한 이벤트 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1-2)input 태그의 입력값 가져오기
    const value = inputQuery.current.value;

    if (!value) {
      query.current.focus();
      alert("검색어를 입력하세요");
      return;
    }
    // 2-2) 입력된 검색어를 상태변수에 등록한다.
    setQuery(value);

    // 3-2) 웹 검색 페이지로 강제 이동
    navigate(`/book?query=${encodeURIComponent(value)}`);
  };

  return (
    <div>
      <h1>카카오 검색</h1>
      <hr />
      {/* 4-2) submit 이벤트 리스너에 미리 준비한 핸들러 연결 */}
      <form onSubmit={handleSubmit}>
        {/* 1-2) 참조변수를 지정하여 입력요소에 접근할 수 있도록 처리 */}
        <input type="search" name="query" ref={inputQuery} />
        <button type="submit">검색</button>
      </form>
      {/* 2-3) query 값이 존재할 때만 메뉴를 노출한다. */}
      <nav>
        <MenuLink
          to={`/book?query=${encodeURIComponent(query)}&sort=expensive`}
        >
          높은 가격 순으로 정렬
        </MenuLink>
        <MenuLink to={`/book?query=${encodeURIComponent(query)}&sort=cheap`}>
          낮은 가격 순으로 정렬
        </MenuLink>
      </nav>
      
    </div>
  );
};

export default Top;
