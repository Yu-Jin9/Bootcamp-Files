// Ex2.jsx
// 문제 1: 조건부 렌더링과 단일 Props
// 목표: 특정 조건에 따라 다른 인삿말을 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - Greeting이라는 컴포넌트를 만드세요.
// - props로 name과 isMorning을 받아 인삿말을 출력합니다.
// - isMorning이 true이면 "좋은 아침입니다, [name]님!"
//   그렇지 않으면 "좋은 저녁입니다, [name]님!"
// - 부모 컴포넌트에서 두 가지 경우를 모두 테스트하세요.

import { useState } from "react";

function Greeting(props) {
  let str = "";
  if (props.isMorning === true) {
    str = "좋은 아침입니다";
  } else {
    str = "좋은 저녁 입니다";
  }

  return (
    <div>
      <h3>
        {str}, {props.name}님!
      </h3>
    </div>
  );
}

export function Prac6() {
  let isMorning = true;
  let name = "짱구";
  return <Greeting name={name} isMorning={isMorning} />;
}

//문제 2: 사용자 상태 변화 관리
// 목표: 버튼 클릭에 따라 사용자 나이를 변경하는 컴포넌트를 작성하세요.
// 요구사항:
// - UserCard라는 컴포넌트를 작성하세요.
// - name, age를 props로 받아 초기 값을 표시합니다.
// - "한 살 더 먹기" 버튼을 클릭하면 나이가 증가합니다.
// - 부모 컴포넌트에서 두 명의 사용자 상태를 관리합니다.

function UserCard(props) {
  return (
    <div>
      <p>이름 : {props.name}</p>
      <p>나이 : {props.age}</p>
      <button onClick={props.Click}>한 살 더 먹기</button>
    </div>
  );
}

export function Prac7() {
  const user1 = { name: "짱구", age: 5 };
  const user2 = { name: "짱아", age: 2 };

  const [age1, setAge1] = useState(user1.age);
  const [age2, setAge2] = useState(user2.age);

  function AddAge1() {
    setAge1(age1 + 1);
  }
  function AddAge2() {
    setAge2(age2 + 1);
  }
  return (
    <>
      <UserCard name={user1.name} age={age1} Click={AddAge1} />
      <UserCard name={user2.name} age={age2} Click={AddAge2} />
    </>
  );
}
