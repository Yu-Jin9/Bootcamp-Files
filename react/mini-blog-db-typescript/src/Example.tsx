import React, { useState, useRef } from "react";
import styled from "styled-components";

interface MyButtonProps {
  primary?: boolean;
}

const MyButton = styled.button<MyButtonProps>`
  background: ${(props) => (props.primary ? "blue" : "grey")};
  padding: 10px;
  color: thistle;
`;

export function CustomButton() {
  return <MyButton promaty={true}>Click me!</MyButton>;
}

interface ButtonProps {
  label: string;
}
//props는 interface로 먼저 정의해 줘야 함
//<>제네릭 안에 interface(props)를 넣어줌
// { label }: ButtonProps -> ButtonProps 이 부분은 생략해도 됨 (추론 가능)

// 리액트에서 함수형 컴포넌트의 타입 정의
// (생략 가능)
// React.FC
const Button: React.FC<ButtonProps> = ({ label }: ButtonProps) => {
  return <button>{label}</button>;
};

interface User {
  id: number;
  name: string;
}

export const ExampleFunc: React.FC = () => {
  const [cnt, setCnt] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    console.log("button clicked");
  };

  return <div></div>;
};

export default Button;
