import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    // 검색엔진 최적화 - SEO 처리
    <HelmetProvider>
      <Helmet>
        <meta charset="utf-8" />
        <title>{props.title}</title>
        {/* SEO태그 */}
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.image} />
        <meta property="og:url" content={props.url} />

        <link rel="shortcut icon" href={props.image} />
        <link rel="icon" href={props.image} />

        {/* 추가적으로 적용해야할 외부 js나 css로 여기서 명시할 수 있다. */}
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: "헤드라인 뉴스",
  description: "React.js로 구현한 헤드라인 뉴스",
  keywords: "React, 헤드라인, 뉴스기사",
  author: "진",
  image: window.location.protocol + '//' + window.location.hostname + ":" + window.location.port + '/logo512.png',
  url: window.location.href,
};

export default Meta;