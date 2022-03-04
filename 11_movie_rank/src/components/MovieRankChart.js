import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MovieRankChart = ({ chartData, targetDt }) => {
  React.useEffect(() => {
    console.clear();

    console.group("MoveRankChart");
    console.log(chartData);
    console.log(targetDt);
    console.groupEnd();
  }, [chartData, targetDt]);

  //   그래프 옵션
  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: targetDt + "관람객 수 순위",
      },
    },
  };

  const data = {
    //   x축에 나타날 항목들
    labels: chartData.movieNm,
    datasets: [
      {
        label: "관람객 수",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "#fe2",
        backgroundColor: "rgba(255, 99, 132, 0.5)",

        // 그래프 각 항목별 y축 수치값
        data: chartData.audiCnt,
      },
    ],
  };
  return <Bar data={data} options={options} />
};


// 검색결과가 없을 경우를 대비해 화면 출력에 사용되는 json-key에 대한 기본값을 정의해 둔다.
MovieRankChart.defaultProps = {
    chartData: {
        movieNm:[],
        audiCnt:[]
    }
}
export default MovieRankChart;
