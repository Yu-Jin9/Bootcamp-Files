// Node.js에서 HTTP 서버를 만들기 위한 기본 모듈
const http = require("http");

// 서버 생성하기 (http.createServer()함수 -> 서버 생성 & 요청)
const server = http.createServer((req, res) => {
  // 요청(req)에 따라 응답(res)작성
  // 요청 방식 확인 (req.method -> GET/POST 확인)
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("You made a GET request!");
  } else if (req.method === "POST") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("You made a POST request!");
  } else {
    res.statusCode = 405; // Method Not Allowed
    res.setHeader("Content-Type", "text/plain");
    res.end("Method not allowed!");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
