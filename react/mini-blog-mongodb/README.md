mini-blog-app 프로젝트

1. react 폴더에서
2. mini-blog-app 프로젝트 생성
3. npm create vite@latest
4. cd mini-blog-app
5. npm install react-router-dom styled-components
6. code .
7. npm run dev

/mini-blog-app
├── src
│ ├── components
│ │ ├── list
│ │ │ ├── CommentList.jsx
│ │ │ ├── CommentListItem.jsx
│ │ │ ├── PostList.jsx
│ │ │ ├── PostListItem.jsx
│ │ ├── pages
│ │ │ ├── MainPage.jsx
│ │ │ ├── PostViewPage.jsx
│ │ │ ├── PostWritePage.jsx
│ │ ├── ui
│ │ │ ├── Button.jsx
│ │ │ ├── TextInput.jsx
│ ├── App.jsx
├── package.json
├── data.json
├── main.jsx

### 프로덕션 배포하기

npm run build

빌드된 파일 실행
npm install -g serve
serve -s dist

### dist폴더를 Github Pages에 배포하기 위한 모듈

npm install -g gh-pages

### package.json

"scripts": {
"build": "vite build",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
}

npm run deploy

### fetch 함수의 기본 형태

fetch(url, options)
.then(response => {
// 서버로부터 받은 응답 처리
})
.catch(error => {
// 요청 중 발생한 에러 처리
})

- fetch() : API 호출이나 서버 요청을 보낼 때 사용되는 함수.
  : Promise 기반으로 비동기 작업 처리 -> 성공 (.then()) / 실패 (.catch())
- url: 데이터를 요청할 서버의 URL.
- options: 요청에 대한 설정. (GET, POST, 헤더, 바디 등)
