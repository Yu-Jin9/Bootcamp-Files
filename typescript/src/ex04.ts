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
