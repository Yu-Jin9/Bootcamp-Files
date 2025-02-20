//ex12-routing.js
//라우팅(routing) : 경로 요청에 따른 처리하기

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200)
  res.send('Hello Express~')
})

// REST-full API 사용할 때 camel형식으로 작성 X
app.get('/login-form', (req, res) => {
  res.status(200)
  res.send('로그인 페이지 입니다.')
})
app.get('/login', (req, res) => {
  res.status(200)
  res.send('로그인 성공했습니다.')
})
app.get('/join-form', () => {})
app.get('/join', () => {})

//요청 : localhost:3000/login
app.get('/posts', (req, res) => {
  res.status(200)
  res.send('포스트 페이지')
})

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중...`)
})
