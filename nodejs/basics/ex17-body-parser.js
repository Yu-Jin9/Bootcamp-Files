//ex17-body-parser.js

//바디파서(Body Parser) 미들웨어

//바디파서란 요청 본문(request body)에 담긴 것을 파싱하는
//미들웨어이다.
//파싱이란 전송된 자료를 프로젝트에서 사용할 수 있는 형식으로 변화하는 것을 말함.

//함수 목록
//.json : JSON형식의 본문을 파싱한다.
//.urlencoded : URL로 인코딩된 본문을 파싱한다.
//            : URL 주소줄 문구(한글)가 깨지지 않도록 암호화하는 것을 url encode라한다.
//.raw : 가공되지 않은 바이너리 자료를 파싱한다.
//.text : 텍스트 형식의 본문을 파싱한다.

//익스프레스 4.16.0 버전부터는 바디파서 함수 중 일부를
//익스프레스가 포함하고 있어서, 바디파서 모듈을 따로 설치하지 않아도 된다.
//"express": "^4.19.2"
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//raw함수나 text함수를 사용하려면 바디파서 모듈을 설치해야 됨.
//npm i body-parser
// const bodyparser = require("body-parser");
// app.use(bodyparser.raw());
// app.use(bodyparser.text());

//req.body
// {
// 	"name" : "hong",
// 	"email" : "homg@mail.com",
// 	"phone" : "010-1111-2222"
// }

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('Hello')
})

// 바디파서 등록
app.use(express.json())
app.use(express.urlencoded({ extended: true })) //qs모듈 사용

app.post('/join', (req, res) => {
  console.log('받은 데이터', req.body)
  console.log(res.header)

  res.json({ message: '데이터가 성공적으로 수신 됨', recevivedData: res.body }) //recevivedData -> 원하는 명 아무거나 사용
})

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`)
})
