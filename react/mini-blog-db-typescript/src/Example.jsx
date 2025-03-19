import React, { useState } from "react";
import styled from "styled-components";

export const MyButton = styled.button`
  background-color: skyblue;
  color: hotpink;
  padding: 10px;
  ${(props) => props.height && `height: ${props.height}px`}
`;

export function CustomButton() {
  return <MyButton height={50}>Click me</MyButton>;
}

const Button = ({ label }) => {
  return <button>{label}</button>;
};

export const ExampleFunc = () => {
  const [cnt, setCnt] = useState(0);
  const [user setUser] = useState(null);
  const inputRef = useRef();

  const handleChange = (event) => {
    console.log(event.target.value);
    
  }

  return <div></div>;
};

export default Button;
