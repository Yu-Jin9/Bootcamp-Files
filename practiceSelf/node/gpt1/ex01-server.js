// HTTP 서버 만들기 (기본)

const http = require("http");

// 서버 생성
const server = http.createServer((req, res) => {
  res.statusCode = 200; // 응답 상태 코드
  res.setHeader("Content-type", "text/plain"); // 응답 헤더
  res.end("Hello, Node.js Server!"); // 응답 본문
});

// 서버 실행
const PORT = 3000; // 사용할 포트 번호
server.listen(PORT, () => {
  console.log(`Server is runnning on http://localhost:${PORT}`);
});
