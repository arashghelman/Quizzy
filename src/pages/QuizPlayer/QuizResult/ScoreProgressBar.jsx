import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ScoreProgressBar({ value }) {
  return (
    <CircularProgressbar
      value={value}
      text={`${value} %`}
      strokeWidth={5}
      styles={buildStyles({
        pathColor: "#34d399",
        trailColor: "#f87171",
        textColor: "#31426b",
        textSize: "16px",
      })}
    />
  );
}
