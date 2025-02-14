import { useState } from "react";
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = (email, password) => {
  const [error, setError] = useState("");
  const result = login(email, password);
  const navigate = useNavigate;

  //로그인 액션
  const handleLogin = () => {
    const result = login(email, password);
    if (result.error) {
      //로그인 실패
      setError(result.error);
    } else {
      //로그인 성공
      navigate("/login"); //로그인 화면으로 이동

      //자동 로그인 => 안된
      // login(email, password);
      // navigate("/");
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;
