// 연습 : GET 요청만 처리하는 서버 만들기

// http 모듈 가져오기
const http = require("http");

// 서버 생성 -> createServer() 함수로 요청, 응답 핸들러 작성
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("GET요청을 처리했습니다.");
  } else {
    res.statusCode = 405; // Method Not Allowed
    res.end("Method not allowed");
  }
});

// 서버 실행 -> server.listen(port)
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버 실행 중`);
});
