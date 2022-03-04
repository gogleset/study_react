import React from "react";

import dayjs from "dayjs";

import style from "../assets/scss/style.module.scss";
import noimg from "../assets/img/noimg.png";

const NewsList = ({ articles }) => {
  React.useEffect(() => {
    console.log(articles);
  }, [articles]);
  return (
    <ul className={style.mediaList}>
      {articles.map((v, i) => (
        <li className={style.mediaItem} key={i}>
          <a href={v.url} target="_blank" rel="noreferrer">
            <img
              src={v.urlToImage ? v.urlToImage : noimg}
              onError={(e) => (e.currentTarget.src = noimg)}
              alt={i.mediaHeading}
            />
            <h2 className={style.mediaHeading}>{v.title}</h2>
            <p className={style.desc}>{v.description}</p>
            <p className={style.date}>
              {v.source && (<span>{v.source.name}</span>)}
              {v.publishedAt && (
                <span style={{ marginLeft: "10px" }}>
                  {dayjs(v.publishedAt).format("YY/MM/DD hh:mm")}
                </span>
              )}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
