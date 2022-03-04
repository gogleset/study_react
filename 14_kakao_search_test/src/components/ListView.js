import React from "react";
import dayjs from "dayjs";

import style from "../assets/scss/style.module.scss";
import noimg from "../assets/img/noimg.png";

/**
 * 검색결과와 썸네일 표시 여부를 전달받아 화면에 목록을 출력하는 컴포넌트
 * @param document - 검색결과 배열
 * @param thumb - 썸네일 이미지 표시 여부
 * @returns
 */

const ListView = ({ documents, thumb, inview }) => {
  console.log(documents);
  return (
    <ul className={style.mediaList}>
      {/* 검색결과에 대한 반복문 수정 */}
      {documents.map((v, i) => (
        <li
          className={style.mediaItem}
          key={i}
          {...(documents.length - 1 === i ? { ref: inview } : {})}
        >
          {/* props로 전달된 thumb가 true인 경우에만 thumbnail이라는 class를 적용 */}
          <a
            href={v.url}
            target="_blank"
            rel="noreferrer"
            className={thumb && style.thumbnail}
          >
            {/* props로 전달된 thumb가 true인 경우에만 이미지 표시 */}
            {thumb && (
              <img
                src={v.thumbnail ? v.thumbnail : noimg}
                onError={(e) => (e.currentTarget.src = noimg)}
                alt={v.title}
              />
            )}

            {/* 제목과 상세 내용은 HTML태그가 포함되어 있기 때문에 dangerouslySetInnerHTML을 사용해서 출력 */}
            <h2
              className={style.mediaHeading}
              dangerouslySetInnerHTML={{ __html: v.title }}
            />
            <p
              className={style.desc}
              dangerouslySetInnerHTML={{ __html: v.contents }}
            />

            {/*가격정보가 있을 경우에만 출력하는 영역 (for 책검색)  */}
            {v.price && (
              <p className={style.price}>
                정가: <span>{v.price}</span><br></br>
                판매가: <span>{v.sale_price}</span>
              </p>
            )}

            <p className={style.date}>
              {/* 저자 정보가 있을 경우만 출력되는 영역(for 책검색)*/}
              {v.authors && (
                <span>
                  <strong>{v.authors.join(",")}</strong> /
                </span>
              )}
              {/* 출판사 정보가 있을 경우만 출력되는 영역(for 책검색) */}
              {v.publisher && (
                <span>
                  <strong>{v.publisher}</strong> /
                </span>
              )}
              {/* 카페이름이 있는 경우만 출력되는 영역 (for 카페검색)*/}
              {v.cafename && (
                <span>
                  <strong>{v.cafename}</strong> /
                </span>
              )}
              {/* 블로그 이름이 있는 경우만 출력되는 영역 (for 블로그 검색) */}
              {v.blogname && (
                <span>
                  <strong>{v.blogname}</strong> /
                </span>
              )}
              {/* 날짜 정보가 있는 경우만 출력되는 영역 (for 전체) */}
              {v.datetime && (
                <span>{dayjs(v.datetime).format("YYYY-MM-DD hh:mm")} /</span>
              )}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};

/**
 * props에 대한 기본값 설정
 */
ListView.defaultProps = {
  document: [],
  thumb: false,
};

export default ListView;
