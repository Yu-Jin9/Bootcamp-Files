import React, { useState, useRef } from 'react'
import styled from 'styled-components'

// 💡 MyButtonProps 인터페이스 정의
interface MyButtonProps {
  primary?: boolean
}

const MyButton = styled.button<MyButtonProps>`
  background: ${(props) => (props.primary ? 'blue' : 'gray')};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
  }
`

// 💡 CustomButton 컴포넌트 개선
export function CustomButton() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <MyButton primary={true} onClick={handleClick}>
      Click me
    </MyButton>
  )
}

// 💡 ButtonProps 인터페이스 정의
interface ButtonProps {
  label: string
}

// 💡 React.FC를 이용한 타입 지정
export const Button: React.FC<ButtonProps> = ({ label }: ButtonProps) => {
  return <button>{label}</button>
}

// 💡 User 인터페이스 정의
interface User {
  id: number
  name: string
}

// 💡 ExampleFunc 컴포넌트 개선
export const ExampleFunc: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [user, setUser] = useState<User | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  // 💡 이벤트 핸들러 수정
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  // 💡 버튼 클릭 이벤트 핸들러 수정
  const handleClick = () => {
    setCount((prev) => prev + 1)
    console.log(`Button clicked! Count: ${count}`)
  }

  // 💡 사용자 데이터 변경 함수
  const updateUser = () => {
    setUser({ id: 1, name: 'John Doe' })
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
      <div>
        <input
          ref={inputRef}
          onChange={handleChange}
          placeholder="Type something..."
        />
      </div>
      <div>
        <button onClick={updateUser}>Update User</button>
        {user && <p>User: {user.name}</p>}
      </div>
    </div>
  )
}
