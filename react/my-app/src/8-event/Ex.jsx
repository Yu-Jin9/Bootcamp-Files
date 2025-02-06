//연습문제1: 마우스 오버와 마우스 아웃 이벤트
// 목표: onMouseEnter와 onMouseLeave 이벤트를 사용하여
//  마우스가 특정 영역에 들어오거나 나갈 때 상태를 변경하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 마우스가 박스 위에 올라가면 배경색이 변경됩니다.
// 마우스가 박스를 벗어나면 원래 배경색으로 돌아옵니다.
// 상태로 관리되는 메시지를 화면에 출력하세요. (예: "마우스가 들어왔습니다", "마우스가 나갔습니다")

import React, { useState } from "react";

export function Mouse() {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("hotpink");

  const ChangeColor = () => {
    setColor("skyblue");
    setMessage("마우스가 들어왔습니다.");
  };
  const OutColor = () => {
    setColor("pink");
    setMessage("마우스가 나갔습니다.");
  };
  // const style = {
  //   width: "100px",
  //   height: "100px",
  //   backgroundColor: color,
  //   border: "1px solid deepskyblue",
  // };
  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          border: "1px solid deepskyblue",
        }}
        onMouseEnter={ChangeColor}
        onMouseLeave={OutColor}
      ></div>
      <h3>{message}</h3>
    </div>
  );
}

//연습문제2: 폼 제출 이벤트 처리하기
// 목표: onSubmit 이벤트를 통해 폼 제출을 처리하고 기본 동작을 방지하는 방법
//요구사항 - 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자 이름과 나이를 입력하는 폼을 만드세요.
// 2.폼이 제출되면 입력값을 콘솔에 출력하고 입력 필드를 비웁니다.
// 3.기본 폼 제출 동작을 방지하세요 (e.preventDefault() 사용).

export function FormEvent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(`이름 : ${name}, 나이 : ${age}`);
    setName("");
    setAge("");
  };

  return (
    <div>
      <form action="http://myserver.com">
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        ></input>
        <button type="submit" onClick={(e) => handleClick(e)}>
          제출
        </button>
      </form>
    </div>
  );
}

// 연습문제 3: 입력 필드에서 글자 수 제한하기
// 목표: 입력 필드의 입력값을 상태로 관리하고 글자 수 제한하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자가 텍스트를 입력할 수 있는 입력 필드가 있습니다.
// 2.입력값은 최대 10자까지만 허용됩니다.
// 3.입력값의 길이에 따라 남은 글자 수를 화면에 표시하세요.

export function Length() {
  const [text, setText] = useState("");
  const [cnt, setCnt] = useState(10);
  // const [arr, setArr] = useState([]);

  const TextLength = (e) => {
    const textValue = e.target.value;
    setCnt(10 - textValue.length);

    if (text.length < 10) {
      setText(textValue);
    }
  };

  return (
    <div>
      <h2>남은 글자 수 : {cnt}</h2>
      <input
        type="text"
        placeholder="입력"
        onChange={TextLength}
        value={text}
      ></input>
    </div>
  );
}
