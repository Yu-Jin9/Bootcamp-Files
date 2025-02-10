// 리액트에서 리스트와 키의 개념
// 리스트(List): 배열 데이터를 동적으로 렌더링하기 위해 사용되는 JSX 요소들의 집합
//  React에서는 배열의 각 항목을 JSX 엘리먼트로 변환하여 화면에 출력합니다.
// 키(Key): 리액트에서 각 리스트 항목을 고유하게 식별하기 위해 사용하는 속성입니다.
//  키는 리액트가 어떤 요소가 변경되었는지, 추가되었는지,
//  제거되었는지를 빠르게 파악하여 DOM을 효율적으로 업데이트하는 데
//  중요한 역할을 합니다.

import React, { useState } from "react";

// 간단한 숫자 리스트 렌더링
export function NumberList() {
  const nums = [1, 2, 3, 4, 5];

  return (
    <>
      <p>Number List</p>
      <ul>
        {/* return을 생략해서 사용했기 때문에 =>{}가 아닌 =>() 사용 */}
        {/* List.jsx:17 Warning: Each child in a list should have a unique "key" prop. */}
        {/* 배열의 인덱스를 사용하면 안됨
              배열의 데이터의 순서가 바뀌거나 추가/삭제 되면, 리액트 모든 항목을 다시 렌더링해야 함.
              입력의 포커스나 애니메이션 효과 등의 상태를 유지할 수 없다. */}
        {nums.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </>
  );
}

// 객체 리스트 렌더링
export function UserList() {
  const users = [
    { id: 1, name: "hong", email: "111@mail.com" },
    { id: 2, name: "kim", email: "222@mail.com" },
    { id: 3, name: "lee", email: "333@mail.com" },
  ];
  return (
    <ul>
      {users.map((user) => {
        return (
          // 여기서는 key값으로 user.id말고 user.email을 사용해도 됨
          <li key={user.id}>
            {user.name}
            {user.email}
          </li>
        );
      })}
    </ul>
  );
}

// 중첩된 리스트
export function CategoryList() {
  const cate = [
    { id: "fruits", name: "Fruits", items: ["Apple", "Banana", "Orange"] },
    {
      id: "vegetables",
      name: "Vegetables",
      items: ["Carrot", "Lettuce", "Cabbage"],
    },
  ];
  return (
    <div>
      {cate.map((category) => {
        return (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {category.items.map((item) => {
                return (
                  // 객체자체를 id로 사용한다.
                  <li key={item}>{item}</li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

// 동적 객체 리스트
export function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부" },
    { id: 2, text: "Js공부" },
    { id: 3, text: "Node 공부" },
  ]);

  const addTodo = () => {
    const newTodo = { id: todos.length + 1, text: "새로운 할 일" };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
      <button onClick={addTodo}>추가하기</button>
    </div>
  );
}
