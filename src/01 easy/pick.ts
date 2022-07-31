// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md

export type Pick<Collection extends object, Keys extends keyof Collection> = { [K in Keys]: Collection[K] }

type C = {
  abc: string
  def: boolean
  foo: 'bar'
}

type C2 = Pick<C, 'abc'>

const c: C2 = {
  abc: 'hei'
}
