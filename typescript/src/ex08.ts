// ex08.ts

// 타입 단언 (Assertion) : 형변환과 유사

type Person = {
  name: string
  age: number
}

// <사용법> : 값 as 타입
let person = {} as Person // 형 단언(확정) or 변환
person.name
person.age

type Dog = {
  name: string
  color: string
}

let dog = {
  name: '멍멍이',
  color: '흰색',
  town: '서울',
} as Dog

// const 선언 (읽기 전용)
let cat = {
  name: '곤냥',
  color: 'pink',
} as const
cat.name = '길냥이'

type POST = {
  title: string
  content?: string // 없을 수도 있다
}
let post: Post = {
  title: '글내용',
}
// Cannot read properties of undefined (reading 'length)
// ? : 옵셔널(null일 수도 있다) undefined
// ! : Not Null 단언 - 개발자가 null이 아님을 확신하고 쓰는 것

const len: number = post.content!.length
// const len: number = post.content?.length
// const len: number = post.content.length

console.log(len)
