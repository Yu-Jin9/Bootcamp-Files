// default 그 외
// import * as E from "./1-element/Element";
// 가져오서 사용할 것은 꼭 여기 중괄호 안에 넣어서 쓰겠다고 해야됨

// function App() {
// return <h1 className="App1"></h1>;

// return E.Hello; => 괄호를 안쓰면 Hello가 실행 안됨
// 이 방식은 JSX로 렌더링하지 않고 REact 컴포넌트 자체 또는
// JSX 요소로 작성된 변수를 반환하는 경우

// return <E.ConfirmDialog />;
// 이 방식은 React의 함수형 (클래스형) 컴퍼넌트를
// JSX 문법으로 호출하여 반환하는 경우

// return E.Hello(); => 이렇게 써도 실행이 되는데 이건 설명을 안해주심 !!
// }

// 기본은 App
// export default App;

import * as A from "./1-element/Es";

function App() {
  // return <h1 className="App1"></h1>;
  return A.NameCard();
}

export default App;
