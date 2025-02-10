/**
 * 연습문제 1: 두 개의 숫자 입력 필드의 합 계산하기 (State 끌어올리기)
    문제 설명:
    두 개의 숫자 입력 필드를 만들고 입력한 숫자들의 합을 부모 컴포넌트에서 
    실시간으로 계산하여 출력합니다.
 */
import React, { useState, useEffect } from "react";

function Child1({ value, onChange }) {
  return (
    <div>
      <label>입력 필드 1 : </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
}

function Child2({ value, onChange }) {
  return (
    <div>
      <label>입력 필드 2 : </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
}

export function SumParent() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const num1 = Number(text1);
    const num2 = Number(text2);
    setSum(num1 + num2);
  }, [text1, text2]);

  return (
    <div>
      <h1>입력값 합산하기</h1>
      <Child1 value={text1} onChange={setText1} />
      <Child2 value={text2} onChange={setText2} />
      <h3>결과: {sum}</h3>
    </div>
  );
}

/**
 * 연습문제2: 선택한 리스트 항목 표시하기 (State 끌어올리기)
 * 문제 설명:
    리스트에 여러 항목(예: 과일 목록)이 주어져 있고, 사용자가 항목을 선택하면 
    선택한 항목들이 부모 컴포넌트에서 관리되어 화면에 표시됩니다.

    const items = ["사과", "바나나", "오렌지", "수박", "포도"];

    요구사항
    항목을 클릭하면 선택된 항목들이 부모 컴포넌트에 저장되어 표시됩니다.
    이미 선택된 항목을 클릭하면 해당 항목이 선택 목록에서 제거됩니다.
    상태는 부모 컴포넌트에서 관리합니다.
 */

function Child1({ value, onClick }) {
  const items = ["사과", "바나나", "오렌지", "수박", "포도"];

  return (
    <div>
      <ul>
        {items.map((item) => {
          return <li onClick={}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export function SumParent() {
  const [checked, setChecked] = useState(false);
  

  useEffect(() => {
    const num1 = Number(text1);
    const num2 = Number(text2);
    setSum(num1 + num2);
  }, [text1, text2]);

  return (
    <div>
      <h1>원하는 아이템 선택하기</h1>
      <Child1 value={checked} onClick={setChecked} />
      <hr/>
      <ul>
        {items.map((item) => {
          return <li onClick={}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
