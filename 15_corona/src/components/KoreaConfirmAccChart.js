import React from "react";

import style from "../assets/scss/style.module.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const KoreaConfirmChart = ({ confirmState }) => {
  const { 날짜, 일일확진, 누적확진 } = confirmState;
  console.log(날짜);
  console.log(일일확진);
  console.log(누적확진);

  //   그래프에 표시될 데이터셋
  const data = {
    // 다중 그래프 처리시 데이터 항목들 정의 (마지막 데이터셋이 화면상에서 뒤에 배치됨)
    datasets: [
      {
        label: "일 확진환자",
        type: "line",
        data: 일일확진,
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2.5,
        pointBorderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(200, 99,00)",
        pointRadius: 6,
        yAxisID: "y2", //y축에 부여할 식별자 --> options에서 연결해서 속성을 명시함
      },
      //   누적확진 막대 그래프
      {
        type: "bar",
        label: "누적확진환자",
        data: 누적확진,
        backgroundColor: "#3571CC",
        yAxisID: "y1", //y축에 부여할 식별자 --> options에서 연결해서 속성을 명시함
      },
    ],
  };


  //   그래프 옵션
  const options = {
    responsive: true, //반응형 켬
    plugins: {
      legend: {
        position: "bottom", //범주 위치 지정
      },
    },
    // 축정보
    scales: {
      x: {
        display: true,
        gridLines: {
          display: false,
        },
        labels: 날짜,
      },

      y1: {
        type: "linear",
        display: true,
        position: "left",
        grid: {
          drawOnChartArea: true,
        },
        labels: {
          show: true,
        },
        ticks: {
          fontColor: "#666",
          fontSize: 10,
          min: 0,
          max: (() => {
            //배열에서 가장 큰 값 찾기
            const maxValue = Math.max.apply(null, 누적확진);
            // 찾아낸 최대값의 120% 산출
            const axisMaxValue = parseInt(maxValue * 1.2);
            // 값을 1000단위로 끊어냄(올림)
            const max = Math.floor(axisMaxValue / 1000) * 1000;
            return max;
          })(),
          step: 2000,
        },
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        labels: {
          show: true,
        },
        ticks: {
          fontColor: "#666",
          fontSize: 10,
          min: 0,
          max: (() => {
            //배열에서 가장 큰 값 찾기
            const maxValue = Math.max.apply(null, 일일확진);
            // 찾아낸 최대값의 120% 산출
            const axisMaxValue = parseInt(maxValue * 1.2);
            // 값을 1000단위로 끊어냄(올림)
            const max = Math.floor(axisMaxValue / 10) * 10;
            return max;
          })(),
          step: 10,
        },
      },
    },
  };

  return (
    <div>
      <h2 className={style.title}>일일 및 누적 확진자 현황</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

// 검색결과가 없을 경우를 대비해 화면 출력에 사용되는 json-key에 대한 기본값을 정의해 둔다.
KoreaConfirmChart.defaultProps = {
  confirmState: {
    날짜: null,
    누적확진: 0,
    일일확진: 0,
  },
};
export default KoreaConfirmChart;
