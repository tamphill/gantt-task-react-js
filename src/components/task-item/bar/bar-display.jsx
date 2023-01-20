import React from "react";
import style from "./bar.module.css";
export const BarDisplay = ({
  x,
  y,
  width,
  height,
  isSelected,
  // progressX,
  // progressWidth,
  barCornerRadius,
  styles,
  onMouseDown,
}) => {
  // const getProcessColor = () => {
  //   return isSelected ? styles.progressSelectedColor : styles.progressColor;
  // };
  const getBarColor = () => {
    return isSelected ? styles.backgroundSelectedColor : styles.backgroundColor;
  };
  return (
    <g onMouseDown={onMouseDown}>
      <rect
        x={x}
        width={width}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getBarColor()}
        className={style.barBackground}
      />
      {/* <rect
          x={progressX}
          width={progressWidth}
          y={y}
          height={height}
          ry={barCornerRadius}
          rx={barCornerRadius}
          fill={getProcessColor()}
        /> */}
    </g>
  );
};
