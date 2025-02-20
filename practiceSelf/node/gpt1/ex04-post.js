// post 요청 데이터 처리
// post : server -> data / server <= client.data 요청의 본문(body)를 읽어야 함

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    // 데이터를 스트림으로 받기
    // 스트림 : 데이터를 조각(chunk) 단위로 나눠서 전달하는 방식.
    // ex) post 요청에서 큰 데이터를 보낼 때 조금씩 나눠서 순차적으로 전달
    //      => 메모리 효율적, 데이터 도착하는 대로 처리가능.

    // req.on("data")
    // -> 요청 데이터가 스트림으로 들어옴
    // -> chunk 단위로 나뉘어서 전달됨
    req.on("data", (chunk) => {});
  }
});
