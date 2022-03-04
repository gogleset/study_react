import React from 'react';

import style from '../assets/scss/style.module.scss';

const MovieRankList = ({boxOfficeResult}) => {
    console.log(boxOfficeResult);
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th className={style.textCenter}>순위</th>
                    <th className={style.textCenter}>제목</th>
                    <th className={style.textCenter}>관람객 수</th>
                    <th className={style.textCenter}>매출액</th>
                    <th className={style.textCenter}>누적 관람객 수</th>
                    <th className={style.textCenter}>누적 매출액</th>
                </tr>
            </thead>
            <tbody>
                {boxOfficeResult.dailyBoxOfficeList.map((v,i) => (
                    <tr key={i}>
                        <td className={style.textCenter}>{v.rank}</td>
                        <td className={style.textCenter}>{v.movieNm}</td>
                        <td className={style.textRight}>{Number(v.audiCnt).toLocaleString()}명</td>
                        <td className={style.textRight}>{Number(v.salesAmt).toLocaleString()}원</td>
                        <td className={style.textRight}>{Number(v.audiAcc).toLocaleString()}명</td>
                        <td className={style.textRight}>{Number(v.salesAcc).toLocaleString()}원</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// 검색 결과가 없을 경우를 대비해 화면 출력에 사용되는 json-key에 대한 기본값을 정의해둔다.
MovieRankList.defaultProps = {
    boxOfficeResult: {
        dailyBoxOfficeList: [],
    }
}

export default MovieRankList;