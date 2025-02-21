import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% -32px); // width를 100%한 픽셀에서 32px을 빼라,,
  ${(props) => props.height && `height: ${props.height}px;`}
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;

function TextInput(props) {
  const { height, value, onChange } = props;

  return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
