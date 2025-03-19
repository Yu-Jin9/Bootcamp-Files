// 타입 별칭 (Type Alias)
type User = {
  id: number
  name: string
  nickname: string
  birth: string
  location: string
  phone: string
}

let user: {
  id: number
  name: string
  nickname: string
  birth: string
  location: string
  phone: string
} = {
  id: 1,
  name: '홍길동',
  nickname: 'hong',
  birth: '2000.01.01',
  location: '한양',
  phone: '010-222-3',
}

let user2: User = {
  id: 1,
  name: '홍길동',
  nickname: 'hong',
  birth: '2000.01.01',
  location: '한양',
  phone: '010-222-3',
}

type CountryCodes = {
  // 객체 리터럴
  Korea: string
  UnitedState: string
  UnitedKingdom: string
}

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
  // 200개라면?
}

type CountryCodes2 = {
  // 인덱스 시그니처
  [key: string]: string
}
let countryCodes2: CountryCodes2 = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
  // Japan: 123, -> number type이 들어가서 오류남
}

type CountryCodes3 = {
  // 인덱스 시그니처 => 필수로 들어가야 하는 값이 있을 경우
  [key: string]: string
  Korea: 'ko' // Korea는 꼭 있어야 한다
}
let countryCodes3: CountryCodes3 = {
  Korea: 'ko', // Korea는 꼭 있어야 함
}
