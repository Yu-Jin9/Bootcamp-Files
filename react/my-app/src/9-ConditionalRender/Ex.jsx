// 연습문제 1: UserProfile 조건부 렌더링
// 사용자 프로필 정보를 표시하는 UserProfile 컴포넌트를 작성하세요.
// 요구사항:
// props.user 객체가 존재하면 사용자 이름과 이메일을 렌더링합니다.
// props.user가 null 또는 undefined이면 "사용자 정보가 없습니다."라는 메시지를 렌더링합니다.
// 힌트: if-else 또는 삼항 연산자를 활용하여 조건부 렌더링을 구현합니다.
import React, { useState } from "react";

function UserInfo(props) {
  const userName = props.user.name;
  const userEmail = props.user.email;

  if (props.user === Null || props.user === undefined) {
    return alert("사용자 정보가 없습니다.");
  } else {
    return (
      <div>
        <h2>사용자 : {userName} </h2>
        <h2>이메일 : {userEmail}</h2>
      </div>
    );
  }
}

export function UserProfile(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const Submit = () => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="http://myserver.com">
        <UserInfo />
        <hr />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        ></input>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        ></input>
        <button onClick={(e) => Submit(e)}>제출</button>
      </form>
    </div>
  );
}

// 연습문제 2: Notification 컴포넌트 (삼항 연산자 사용)
// 문제:
// Notification 컴포넌트를 작성하여, 알림의 개수에 따라 메시지를 다르게 보여주세요.
// 요구사항:
// props.count가 0이면 "새로운 알림이 없습니다."를 렌더링합니다.
// props.count가 0보다 크면 "새로운 알림이 {count}개 있습니다."를 렌더링합니다.
// 힌트: 삼항 연산자를 사용하여 간결하게 구현할 수 있습니다.

// 연습문제 3: Advertisement 컴포넌트 (&& 연산자 사용)
// 문제:
// 프리미엄 회원이 아닐 때 광고를 표시하는 Advertisement 컴포넌트를 작성하세요.
// 요구사항:
// props.isPremium이 false일 때만 광고 영역을 렌더링합니다.
// 프리미엄 회원이면 아무것도 렌더링하지 않습니다.
// 힌트: 논리 연산자(&&)를 활용하여 조건이 참일 때만 광고 영역을 표시합니다.
