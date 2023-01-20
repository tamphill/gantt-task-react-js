import React from "react";
import styles from "./calendar.module.css";
export const TopPartOfCalendar = ({
  value,
  x1Line,
  y1Line,
  y2Line,
  xText,
  yText,
}) => {
  return (
    <g className="calendarTop">
      <line
        x1={x1Line}
        y1={y1Line}
        x2={x1Line}
        y2={y2Line}
        className={styles.calendarTopTick}
        key={value + "line"}
      />
      <text
        key={value + "text"}
        y={yText}
        x={xText}
        className={styles.calendarTopText}
      >
        {value}
      </text>
    </g>
  );
};
