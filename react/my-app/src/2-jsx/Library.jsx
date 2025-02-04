import React from "react";
import Book from "./Book";

function Library() {
  // 컴포넌트 이름과 파일 이름을 맞춰서 사용하는게 좋음
  return (
    <div>
      <Book name="리액트 기초" price={3000} />
      <Book name="노드JS 기초" price={4000} />
      <Book name="AWS 기초" price={5000} />
    </div>
  );
}

export default Library;
