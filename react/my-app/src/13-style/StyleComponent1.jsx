// StyledComponent1.jsx
import styled from "styled-components";
//styled-components 모듈 사용 : JSX-html문법, SC는 css문법을 그대로 따름.
// 모듈 설치
// npm i styled-components

// " `` " 백틱 사용! 안에는 그대로 css문법
const Button = styled.button`
  // css 문법 사용 (snail-case 그대로 사용  / CamelCase X)
  color: red;
  font-size: 24px;
  background-color: skyblue;
  background-color: ${(props) => (props.dark ? "hotpink" : "deepskyblue")};
  border: 1px solid green;
`;

function StyledComponent1() {
  return (
    <div>
      <Button>Normal</Button>
      <br />
      <Button dark="dark">Dark</Button>
    </div>
  );
}

export default StyledComponent1;
