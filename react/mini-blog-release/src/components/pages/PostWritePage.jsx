import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function PostWritePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // 로컬 스토리지에 저장
    // timestamp : 1970.01.01.00.00.00.000 밀리셐컨드 단위의 정수
    //               년,월,일,시,분,초,밀리초
    // 밀리초까지 사용하는 것은 엄청 대량의 클릭이 들어오는 페이지에서 사용하는듯 ex) 쿠팡,,,
    const newPost = {
      id: Date.now(), // 임의의 고유 ID 생성
      title,
      content,
      comments: [], // 빈 댓글 배열 초기화
    };
    //localStorage에서 게시물 정보를 가져옴.
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    existingPosts.push(newPost);
    //JSON.stringify : JSON 객체를 문자열로 만들어주는 함수
    localStorage.setItem("posts", JSON.stringify(existingPosts));

    // 홈 페이지로 이동
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <TextInput
          height={180}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <Button title="글 작성하기" onClick={handleSubmit} />
      </Container>
    </Wrapper>
  );
}

export default PostWritePage;
