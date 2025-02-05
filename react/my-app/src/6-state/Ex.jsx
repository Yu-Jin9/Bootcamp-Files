// 연습문제 1: 입력된 텍스트를 화면에 바로 보여주기
// 설명: 입력 필드에 사용자가 입력한 텍스트를 바로 화면에 표시하세요.
// 힌트: onChange 이벤트

import { useRef, useState, useEffect } from "react";

export function TextChange() {
  const [text, setText] = useState("");

  const textChange = (txt) => {
    setText(txt.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={textChange}
        // 이벤트 함수 매개변수로 event객체로 받을 수 있다
        // txt : 이벤트 객체 - 이벤트에 대한 정보를 담고 있다.
        // txt.target : 이벤트가 발생한 객체 (input객체)
        placeholder="텍스트를 입력하세요"
      ></input>
      <p>입력 내용 : {text}</p>
    </div>
  );
}

// 연습문제 2: 버튼을 클릭할 때마다 색상 변경하기
// 설명: 버튼을 클릭할 때마다 배경 색상이 빨강, 초록, 파랑으로
//    순차적으로 변경되도록 만드세요.

export function BackgroundChange() {
  const [color, setColor] = useState("white");
  const [colorIndex, setColorIndex] = useState(0);

  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.width = `${window.innerWidth}px`;
      divRef.current.style.height = `${window.innerHeight}px`;
    }
  }, []);
  const arrColor = ["blue", "pink", "green", "yellow"];

  function ChangeColor() {
    if (colorIndex < arrColor.length - 1) {
      setColorIndex(colorIndex + 1);
    } else {
      setColorIndex(0);
    }
    return setColor(arrColor[colorIndex]);
  }

  return (
    <div
      ref={divRef}
      style={{ background: `${color}`, width: "100%", height: "100%" }}
    >
      <button onClick={ChangeColor}>색상 변경</button>
    </div>
  );
}

// 연습문제 3: 체크박스 상태 관리하기
// 설명: 체크박스를 클릭하면 "ON" 또는 "OFF"라는 텍스트가
//   화면에 표시되도록 만드세요.
// 힌트: onChange, checked 속성을 이용

export function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  const [text, setText] = useState("off");

  function Check() {
    if (!isChecked == true) {
      setIsChecked(true);
      setText("on");
    } else {
      setIsChecked(false);
      setText("off");
    }
  }
  return (
    <div>
      <input type="checkbox" onChange={Check} checked={isChecked}></input>
      <p>{text}</p>
    </div>
  );
}

// 연습문제 4: 숫자 제한 걸기
// 설명: 숫자를 증가시키되, 숫자가 10 이상이면
//   더 이상 증가하지 않도록 제한하세요.

export function Number() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setNum((num) => {
        if (num < 10) {
          return num + 1;
        } else {
          clearInterval(interval);
        }
      });
    }, 1000);
  }, []);

  return (
    <div>
      <p>{num}</p>
    </div>
  );
}

// 연습문제 5: 버튼을 클릭할 때마다 리스트에 항목 추가하기
// 설명: 버튼을 클릭하면 입력 필드의 값을 리스트에 추가하고,
//   추가된 항목들을 화면에 표시하세요.
// 힌트: [], ["aaa", "bbb", "ccc"]

export function AddList() {
  const [text, setText] = useState("");

  function Add(text) {
    setText(text.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="텍스트를 입력 하세요"
        value={text}
      ></input>
      <button onClick={Add}>입력</button>
      <ul>
        <li>{text}</li>
      </ul>
    </div>
  );
}
