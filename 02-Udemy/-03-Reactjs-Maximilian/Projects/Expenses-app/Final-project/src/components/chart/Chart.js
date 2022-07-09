import React from "react";
import CharBar from "./chartbar/ChartBar";
import "./Chart.css";

export default function Chart(props) {
  const itemsValue = props.items.map((item) => item.value);
  const Max = Math.max(...itemsValue);
  return (
    <div className="chart">
      {props.items.map((item) => (
        <CharBar
          key={item.label}
          label={item.label}
          maxValue={Max}
          value={item.value}
        />
      ))}
    </div>
  );
}
