// ex07.ts

// 합집합 타입 - Union
let a: string | number | boolean
a = 123
a = 'hong'
a = true

let arr: (string | number | boolean)[] = [123, 'hong', true]

// 객체 타입
type Dog = {
  name: string
  color: string
}
type Person = {
  name: string
  lang: string
}
type Union1 = Dog | Person

let union1: Union1 = {
  name: '',
  color: '',
}

let union2: Union1 = {
  name: '',
  lang: '',
}

let union3: Union1 = {
  name: '',
  color: '',
  lang: '',
}

// 위의 세가지 경우만 가능함.
// 이런 경우는 불가능 (오류)
// let union4: Union1 = {
//   name: '',
// }

// 교집합 타입 - Intersection

// never 타입으로 추정된다.
let neverVar: string & number

type Intersection = Dog & Person
// 세가지 모두 다 넣을 때만 intersection 가능함
let inter1: Intersection = {
  name: '',
  color: '',
  lang: '',
}

// 객체 타입의 호환성
let dog: Dog
let person: Person

// 타입이 호환 되는 경우
dog = inter1
person = inter1
// 2개 3개 가지고 있는데 inter1에서 하나 빼고 dog에 들어간다고 생각하면 됨

// 타입 호환 안되는 경우
// inter1 = dog
// inter1 = person
