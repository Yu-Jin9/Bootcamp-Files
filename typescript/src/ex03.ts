// ex03.ts

// 객체 타입
let user1: object = {
  id: 1,
  name: '홍길동',
}

// 'object'형식에 'id' 속성이 없습니다.
user1.id

let user2: {
  id: number
  name: string
} = {
  id: 1,
  name: '홍길동',
}

// (property)
// 선택적 프로퍼티를 통해 속성 생략 가능
let user3: {
  id?: number
  name: string
} = {
  id: 1,
  name: '홍길동',
}
// const user: user3 = {
// id: 1,
//   name,
// }

let config = {
  // 읽기 저용 속성으로 지정
  apiKey: string,
  apiKeyss: 'MY API KEY',
}

config.apiKey = '123123'
