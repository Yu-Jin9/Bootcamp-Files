import React, { useEffect, useState } from "react";
// Ex.jsx
// 연습문제1: 컴포넌트 마운트 시 콘솔에 메시지 출력하기
// 목표: 컴포넌트가 마운트될 때 콘솔에 "컴포넌트가 마운트되었습니다." 메시지를 출력하세요.
// 요구사항:
// useEffect를 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정하세요.
// 힌트: 빈 배열 []을 의존성 배열로 사용하세요.

export function StartFunc() {
  useEffect(() => {
    console.log("컴포넌트가 마운트 되었습니다.");
  }, []);
}

// 연습문제2. 상태값이 변경될 때 메시지 출력하기
// 목표: 버튼을 클릭하여 상태값을 변경할 때마다 콘솔에 상태값이 출력되도록 만드세요.
// 요구사항:
// useEffect를 사용하여 상태값이 변경될 때마다 메시지를 출력하세요.
// 힌트: useEffect의 의존성 배열에 상태값을 넣으세요.

export function ChangeFunc() {
  let [cnt, setCnt] = useState(0);

  useEffect(() => {
    console.log("값이 변경되었습니다.");
  }, [cnt]);

  function AddCnt() {
    cnt = setCnt(cnt + 1);
  }

  return (
    <div>
      <p>{cnt}</p>
      <button onClick={AddCnt}>+1</button>
    </div>
  );
}

//연습문제3: 타이머 기능 (마운트 및 언마운트)
// 목표: 컴포넌트가 마운트되면 1초마다 상태값이 증가하는 타이머를 시작하고, 컴포넌트가 언마운트될 때 타이머를 정리하세요.
// 요구사항:
// useEffect를 사용하여 마운트 시 타이머를 시작하고, 언마운트 시 타이머를 정리하세요.
// 1초마다 상태값을 증가시키세요.
// 힌트: setInterval과 clearInterval 사용

export function TimerFunc() {
  const [MountComponent, setMountComponent] = useState(true);

  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCnt((cnt) => cnt + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("타이머 종료(언마운트)");
    };
  }, []);

  return (
    <div>
      <p>타이머 : {MountComponent && cnt}</p>
      <button
        onClick={() => {
          setMountComponent(false);
        }}
      >
        언마운트
      </button>
    </div>
  );
}

// 4. 윈도우 크기 변경 감지
// 목표: 윈도우의 크기가 변경될 때마다 현재 창의 너비를 화면에 표시하세요.
// 요구사항:
// useEffect로 이벤트 리스너를 등록하고 창 크기가 변경될 때마다 상태를 업데이트하세요.
// 언마운트 시 이벤트 리스너를 해제하세요.
// 힌트: window.addEventListener와 window.removeEventListener

export function WindowFunc() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [ComponentMount, setComponentMount] = useState(true);

  function Resize() {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", Resize);

    return () => {
      window.removeEventListener("resize", Resize);
    };
  }, []);

  return (
    <div>
      <p>화면 너비 : {ComponentMount && windowSize}</p>
      <button onClick={() => setComponentMount(false)}>삭제</button>
    </div>
  );
}

//연습문제5: API 호출 및 데이터 로드
// 목표: 컴포넌트가 마운트될 때 API 호출을 통해 데이터를 가져와 화면에 표시하세요.
// 요구사항:
// 1. URL: https://jsonplaceholder.typicode.com/posts
// 2. 상위 10개의 포스트 테이터만 출력하세요.
// 3. useEffect를 사용하여 컴포넌트가 마운트될 때 데이터를 로드하세요.
// 4. 데이터를 로드한 후 상태에 저장하고 화면에 출력하세요.
// 힌트: fetch 또는 axios 모듈 사용 가능합니다.
