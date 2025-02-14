import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
// 전역 변수로 설정하기 위함
export const useAuth = () => useContext(AuthContext);

// props로 children을 받아와서 사용
export const AuthProvider = ({ children }) => {
  const preset = [{ email: "hong@mail.com", password: "1234" }];
  const [users, setUsers] = useState([preset]); // 사용자 목록
  const [currentUser, setCurrentUser] = useState(null); // 현재 로그인된 사용자

  // users배열에 새로운 사용자 추가
  // 간단한 회원가입 로직
  const signup = (email, password) => {
    if (users.find((user) => user.email === email)) {
      return { error: "이미 가입된 이메일 입니다." }; // error객체 리턴
    }
    const newUser = { email, password };
    setUsers([...users, newUser]); // 기존 배열(정보)의 끝에 새로운 user저장
    return { success: true };
  };

  const login = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return { error: "이메일 또는 비밀번호가 올바르지 않습니다." };
    }
    setCurrentUser(user);
    return { success: true };
  };

  // 원래는 서버에서 세션을 날리지만 서버연결이 안되어있어서 이렇게 함.
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 화살표함수에서는 export default를 사용할 수 없음
// 밖에서 AuthProider를 읽고 싶을 때는 import {AuthProvider} 해서 사용해야 됨.
