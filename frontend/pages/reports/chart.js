
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function ChartReport({ chartData }) {
  return (
    <div>
      <h1>Chart Report</h1>
      {chartData && <Bar data={chartData} />}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reports/chart`);
  const chartData = await res.json();

  return {
    props: { chartData },
  };
}
