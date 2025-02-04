//Ex.jsx
// 1. 문제 1: 단일 Props 전달하기
// 목표: 단일 `props`를 활용하여 간단한 문구를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `Greeting`이라는 자식 컴포넌트를 만드세요.
// - `name`이라는 `props`를 받아 "환영합니다,
//   [이름]님!"이라는 문구를 렌더링합니다.
// - 부모 컴포넌트에서 여러 사람의 이름을 넘겨 출력합니다.

function Greeting(props) {
  return (
    <div>
      <h2>환영합니다!</h2>
      <ul>
        {props.names.map((item) => {
          return <li>{item}님!</li>;
        })}
      </ul>
    </div>
  );
}

export function Prac1() {
  return (
    <div>
      <Greeting names={["짱구", "맹구", "흰둥이"]} />
    </div>
  );
}

// 2. 문제 2: 여러 Props 전달하기
// 목표: 여러 개의 `props`를 활용하여 사용자의 정보를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `UserCard`라는 자식 컴포넌트를 작성하세요.
// - `name`, `age`, `job`을 `props`로 받아 사용자 정보를 표시합니다.
// - 부모 컴포넌트에서 두 명의 사용자 정보를 전달해 렌더링합니다.

function UserCard({ name, age, job }) {
  return (
    <div>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>직업 : {job}</p>
    </div>
  );
}

export function Prac2() {
  const users = [
    { name: "짱구", age: "5", job: "유치원생" },
    { name: "흰둥이", age: "3", job: "강아지" },
  ];
  return (
    <>
      {/* map() 함수를 사용할 때도 return을 적는 것 주의!!! */}
      {users.map((user, index) => {
        return <UserCard key={index} {...user} />;
      })}
    </>
  );
}

// 3. 문제 3: 배열 Props 전달하기
// 목표: 배열 데이터를 `props`로 전달하여 리스트 형태로 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ItemList`라는 자식 컴포넌트를 작성하세요.
// - `items`라는 배열을 `props`로 받아 `<li>` 태그로 각 항목을 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 다른 배열을 전달해 두 개의 목록을 출력합니다.

function ItemList(props) {
  return (
    <div>
      <ul>
        {props.nick.map((item) => {
          return <li>이름 : {item}</li>;
        })}
      </ul>
      <ul>
        {props.gender.map((item) => {
          return <li>성별 : {item}</li>;
        })}
      </ul>
    </div>
  );
}

export function Prac3() {
  const items1 = ["짱구", "맹구", "짱아"];
  const items2 = ["남", "남", "여"];

  return <ItemList nick={items1} gender={items2} />;
}

// 4. 문제 4: 이벤트 Props 전달하기
// 목표: 버튼을 클릭했을 때 이벤트를 처리하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ClickButton`이라는 자식 컴포넌트를 작성하세요.
// - 부모 컴포넌트에서 클릭 시 경고창이 뜨도록 이벤트 핸들러를 전달하세요.

function ClickButton(props) {
  return (
    <div>
      {/* 여기도 click함수를 적을 때 ()를 같이 적으면 시작과 함께 함수가 시작됨 */}
      {/* 버튼을 눌렀을 때 동작하게 하려면 ()를 적으면 안됨 주의!! */}
      <button onClick={props.click}>버튼</button>
    </div>
  );
}

export function Prac4() {
  function Clicked() {
    alert("경고!");
  }
  return (
    <>
      <ClickButton click={Clicked} />
    </>
  );
}

// 5. 문제 5: children을 이용한 컴포넌트 구성
// 목표: `children`을 활용하여 컴포넌트 내부에서 콘텐츠를 자유롭게 구성하는 연습을 합니다.
// 요구사항:
// - `InfoCard`라는 자식 컴포넌트를 작성하세요.
// - `title`이라는 `props`와 `children`을 사용하여 제목과 본문 콘텐츠를 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 카드를 렌더링하세요.

function InfoCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

export function Prac5() {
  return (
    <InfoCard title="이것은 제목이여">
      <p>이것은 내용입니다용</p>
    </InfoCard>
  );
}
