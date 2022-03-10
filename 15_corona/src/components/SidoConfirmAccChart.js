import React from "react";

import style from "../assets/scss/style.module.scss";

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

const SidoConfirmAccChart = ({ 지역명, 누적확진자 }) => {
  //   그래프 옵션
  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const data = {
    //   x축에 나타날 항목들
    labels: 지역명,
    // y축의 값을 비롯한 기타 옵션들
    datasets: [
      {
        label: "누적확진자",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "#fe2",
        backgroundColor: "rgba(255, 99, 132, 0.5)",

        // 그래프 각 항목별 y축 수치값
        data: 누적확진자,
      },
    ],
  };
  return (
    <div>
      <h2 className={style.title}>시도별 누적 확진자 현황</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

// 검색결과가 없을 경우를 대비해 화면 출력에 사용되는 json-key에 대한 기본값을 정의해 둔다.
SidoConfirmAccChart.defaultProps = {
  지역명: [],
  누적확진자: [],
};
export default SidoConfirmAccChart;
