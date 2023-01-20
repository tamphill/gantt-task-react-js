import React, { useRef, useEffect } from "react";
import styles from "./horizontal-scroll.module.css";
export const HorizontalScroll = ({
  scroll,
  svgWidth,
  taskListWidth,
  rtl,
  onScroll,
}) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scroll;
    }
  }, [scroll]);
  return (
    <div
      dir="ltr"
      style={{
        margin: rtl
          ? `0px ${taskListWidth}px 0px 0px`
          : `0px 0px 0px ${taskListWidth}px`,
      }}
      className={styles.scrollWrapper}
      onScroll={onScroll}
      ref={scrollRef}
    >
      <div style={{ width: svgWidth }} className={styles.scroll} />
    </div>
  );
};
