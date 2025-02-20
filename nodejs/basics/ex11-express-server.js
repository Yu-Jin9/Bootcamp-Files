// ex11-express-server.js

const express = require('express') // require : Node.js에서 모듈을 가져올 때 사용하는 함수
// app : express aplication ocject -> 이 객체를 통해 라우팅, 요청 처리, 미들웨어 설정 등을 함
const app = express() // expess : 웹 서버를 쉽게 만들 수 있는 Node.js라이브러리.
const PORT = 3000 // 서버가 사용할 port 지정

// express -> get 메소드를 지원하는 서버를 생성
// app.get(path, callback)
// path : 클라이언트가 요청할 URL 경로. 여기서는 '/'
// callback : 요청을 처리하는 함수. (req,res)는 요청 객체와 응답 객체를 나타냄.
app.get('/', (req, res) => {
  // => 특정 경로('/')에 대한 핸들러 등록
  res.status(200) // 상태코드를 200(OK)으로 설정

  // res.send => 클라이언트한테 데이터를 응답으로 보냄
  // 문자열, JSON, HTML 등이 올 수 있음

  // 원리적으로 핵심 이해하기
  // res.send('김희은 바보 몽총이~~~')
  // res.send("{ 'email': 'abc@mail.com' }")
  res.send('<!Doctype html><html><div>hello</div></html>')
})

// app.listen()메서드 역할 : 서버를 실행하고 특정 포트에서 클라이언트 요청을 대기함
// PORT : 서버가 요청을 대기할 포트 번호
// 콜백함수 : 서버가 정상적으로 실행됐을 때 호출 될 함수
app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버 실행 중,,`)
})

// 상태코드
// 200 : 성공적으로 요청되었고, 정상 종료됨.
// 201(작성됨) : 성공적으로 요청되었고, 서버가 새 리소스를 작성했다는 의미
// 400(잘못된 요청) : 클라의 요청이 잘못되었거나 유효하지 않음.
// 401(권한 없음, unauthorized) : 클라의 권한이 없음. 인증을 통해 요청을 다시 할수 있음.
// 403(권한 없음. Forbidden) : 권한이 없어 거절됨. 계속 거절할 것이다.
// 404(리소스 못찾음. Not Found) : 해당 데이터를 찾을 수 없음.
// 500(서버 내부 오류) : 서버가 요청을 처리하는 중 에러 발생!
// 503(서비스 이용 불가) : 비활성화된 서비스임.
