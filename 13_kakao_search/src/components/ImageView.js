import React from "react";
import dayjs from "dayjs";

import style from "../assets/scss/style.module.scss";
import noimg from "../assets/img/noimg.png";

const ImageView = ({ documents, inview }) => {
  return (
    <div className={style.imageList}>
      {documents.map((v, i) => (
        <div
          className={style.imageItem}
          key={i}
          {...(documents.length - 1 === i ? { ref: inview } : {})}
        >
          <a href={v.doc_url}>
            <div className={style.imgArea}>
              <img
                src={v.thumbnail_url ? v.thumbnail_url : noimg}
                onError={(e) => (e.currentTarget.src = noimg)}
                alt={v.title}
              />
            </div>
            <div className={style.textArea}>
              <h4>{v.display_sitename}</h4>
              <ul>
                <li>{v.collection}</li>
                <li>
                  {v.width}x{v.height}
                </li>
                <li>{dayjs(v.datetime).format("YYYY-MM-DD hh:mm")}</li>
              </ul>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
ImageView.defaultProps = {
  documents: [],
};
export default ImageView;
