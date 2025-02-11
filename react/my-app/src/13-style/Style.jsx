// 1.JS Inline Style 속성
import React from "react";

function InlineStyle() {
  const boxStyle = {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "20px",
    border: "2px solid navy",
    borderRadius: "8px",
    textAlign: "center",
  };
  return (
    <div style={boxStyle}>
      <h1 style={{ fontSize: "24px", margin: "0" }}>
        리액트 인라인 스타일 예제
      </h1>
      <p style={{ fontStyle: "italic" }}>JS 객체로 스타일을 적용하는 예제</p>
    </div>
  );
}

export default InlineStyle;
