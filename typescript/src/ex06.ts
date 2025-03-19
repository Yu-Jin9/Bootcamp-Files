// ex06.ts

// unknown타입 : 모든 타입의 수퍼셋(모집합)

let unknownVar: unknown

// 모든 타입의 값이 들어갈 수 있다
unknownVar = 123
unknownVar = 'hong'
unknownVar = () => {}

let num: number
// 타입 좁히기
if (typeof unknownVar == 'number') {
  num = unknownVar
}

// any 타입
// 타입을 무시하는 타입 - 가급적 제한적인 상황에서만 사용.
let anyVar: any = 10

// any 타입은 어떤 타입이든 값이 들어간다. 타입 무시.
let num2: number = 20
num2 = anyVar

let str: string
str = anyVar

// * 어떤 타입인지 전혀 모르는 상황에서 일단 값을 받아야 될 때

// void
// 공허 - 아무것도 없는
// 함수의 반환값의 타입이 없을 때 주로 사용
function myFun(): void {
  console.log('hello')
  return
  // return이 없을 때 끝나도 void
  // void는 반환 되긴 함
}

function myFun2(): number {
  return 10
}

function myFun3(): string {
  return 'jfjhfjshdjfhdskf'
}

// never 타입
// 존재하지 않는, 말도 안되는, 불가능한
function myFunc4(): never {
  while (true) {} // 원래는 반환 자체가 안되는 것 (무한루프)
}

function myFunc5(): never {
  throw new Error() // 강제 예외(오류) 발생
}
