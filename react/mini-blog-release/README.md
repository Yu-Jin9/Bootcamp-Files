mini-blog-app 프로젝트

1. react 폴더에서
2. mini-blog-app 프로젝트 생성
3. npm create vite@latest
4. cd mini-blog-app
5. npm install react-router-dom, styled-components
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

.

### 프로덕션 배포하기

(로컬에서 배포) -> 로컬에서 끄면 웹에서 더이상 사용 못함
명령어 : npm run build

빌드된 파일 실행
npm install -g serve (컴퓨터 전체 단위)
serve -s dist (build로 하니까 안되고 dist라고 하니까 됨// 아마도 dist 파일 안에 생겨서 그런듯)
명령어 실행하고 나면 아래 주소가 뜨고 제대로 화면이 보이면 성공임

### dist폴더를 Github Pages에 배포하기 위한 모듈

npm install -g gh-pages

### package.jason

"scripts": {
"dev": "vite",
"build": "vite build",
"lint": "eslint .",
"preview": "vite preview"
},
여기에
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
이 두 줄 추가하기

npm run deploy

<!-- http://192.168.10.25:3000  -->

웹 서버 (WAS) 필요

- 깃 허브 Pages
- Vercel
- AWS EC2 or 라이트 세일(월정액)
