// ex11.ts
// 인터페이스

// 타입 별칭 vs 인터페이스
// 변수, 함수 등의 타입정의    객체의 구조를 정의
// 유니온 / 교차타입 가능      불가능
// 확장 (extends 상속) 불가    상속 가능

interface Person {
  name: string
  age: number
  sayHi(): void
}

const person: Person = {
  name: '홍길동',
  age: 30,
  sayHi: function () {
    console.log('Hi')
  },
}

// 상속(확장) extends
type Animal = {
  name: string
  color: string
}

interface Dog extends Animal {
  isBark: boolean
}
interface Parent {
  name: string
  age: number
}
interface Cat extends Parent {
  ifScratch: boolean
}
