// ex01.ts
// 기본 타입(Primary type) : 하나의 값만 가지는 타입

// 명시적 타입 선언 vs 암묵적 타입선언
let myNum: number //명시적
let myNum2 = 123 //암묵적

// number
let num1: number = 123
// string
let str1: string = 'hello'
// boolean
let bool1: boolean = true
// null
let null1: null = null
//undefined
let unde1: undefined = undefined
// 리터널 타입
let lit1: 10 = 10

// strict : true 엄격한 타입

// strictNullChecks : true.
// null 값을 변수에 할당하지 못하도록 한다.
let numA: number = null
