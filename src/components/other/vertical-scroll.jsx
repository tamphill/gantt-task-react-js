import React, { useRef, useEffect } from "react";
import styles from "./vertical-scroll.module.css";
export const VerticalScroll = ({
  scroll,
  ganttHeight,
  ganttFullHeight,
  headerHeight,
  rtl,
  onScroll,
}) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scroll;
    }
  }, [scroll]);
  return (
    <div
      style={{
        height: ganttHeight,
        marginTop: headerHeight,
        marginLeft: rtl ? "" : "-1rem",
      }}
      className={styles.scroll}
      onScroll={onScroll}
      ref={scrollRef}
    >
      <div style={{ height: ganttFullHeight, width: 1 }} />
    </div>
  );
};
