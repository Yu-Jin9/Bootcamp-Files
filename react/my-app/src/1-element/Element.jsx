// 리액트 엘리먼트(React Element)란?
// 리액트 엘리먼트는 리액트 앱의 UI를 구성하는 가장 작은 단위입니다. 엘리먼트는 화면에 표시될 내용을 설명하는 자바스크립트 객체로, 컴포넌트를 생성하고 렌더링하는 데 사용됩니다.

// 리액트 엘리먼트는 **불변(immutable)**이며 한 번 생성되면 그 내용을 변경할 수 없습니다. 대신 새로운 엘리먼트를 생성하여 화면의 변화를 반영합니다.

// 리액트 엘리먼트의 특징
// 1. 불변성: 엘리먼트는 한 번 생성되면 변경할 수 없습니다.
// 2. 가볍고 빠름: 가상 DOM을 사용하여 변경 사항을 효율적으로 관리합니다.
// 3. UI의 구성 단위: 컴포넌트 내에서 리액트 엘리먼트는 HTML 태그처럼 사용됩니다.

import React from "react";
// React 17 이상에서는 import 하지 않아도 JSX 사용 가능함.

// html 처럼 보이지만 JSX이기 때문에 className이라고 써야됨 (혼동 주의)
const E1 = <h1 className="greeting">이것은 Element ~</h1>;
export const E2 = React.createElement(
  "h1", // type
  // null, // props
  {
    className: "greeting",
  },
  "리액트 엘리먼트 입니다." // [...children]
);

// JSX에서 JS시작하려면, {}중괄호 사용
// JS에서 스타일은 key, value 객체로 사용됨.
export const E3 = <h1 style={{ color: "blue" }}>앨리먼트3</h1>;

const fruits = ["사과", "바나나", "포도"];
export const E4 = (
  <ul>
    {/* map을 사용해서 배열을 순환 */}
    {/* list의 매커니즘 이해하기 */}
    {fruits.map((item, index, array) => {
      // array는 여기서는 쓸 일이 없음 (그냥 명시)
      // ps. 화살표 함수에서는 return, ;, {} 생략 가능 (식이 한 줄 일 경우에만)
      // {JS 값 표현식} -> 값을 출력하고자 할 때 {item} 으로 값을 출력
      // 리액트의 리스트(목록)은 key를 줘야 함
      return <li key={index}>{item}</li>;
    })}
    {/* <li>사과</li>
    <li>바나나</li>
    <li>포도</li> */}
  </ul>
);

export default E1;
// export { E1, E2 };
