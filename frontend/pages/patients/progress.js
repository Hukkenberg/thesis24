
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import styles from "../../styles/Progress.module.css";

const Progress = () => {
  const [labResults, setLabResults] = useState([]);

  useEffect(() => {
    fetch("/api/progress/labs")
      .then((res) => res.json())
      .then((data) => setLabResults(data))
      .catch((err) => alert("Error fetching lab results"));
  }, []);

  useEffect(() => {
    const ctx = document.getElementById("progressChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labResults.map((result) => result.date),
        datasets: [
          {
            label: "Lab Test Progress",
            data: labResults.map((result) => result.value),
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            fill: false,
          },
        ],
      },
    });
  }, [labResults]);

  return (
    <div className={styles.progress}>
      <h1>Progress</h1>
      <canvas id="progressChart"></canvas>
    </div>
  );
};

export default Progress;
