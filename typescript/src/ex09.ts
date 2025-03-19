// ex09.ts
// 타입 좁히기

function finc1(value: number | string) {
  //value.toFixed() // 실수형으로 바꾸기
  //value.toUppercase() // 대문자로 바꾸기 (string에서만 가능)
  if (typeof value === 'number') {
    value.toFixed()
  } else if (typeof value === 'string') {
    value.toUpperCase()
  }
}
