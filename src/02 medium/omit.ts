// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md

export type Omit<Object extends object, Keys extends keyof Object> = { [K in keyof Object as K extends Keys ? never : K]: Object[K] }

type C = {
  abc: string,
  def: boolean,
  foo: 'bar'
}

type C2 = Omit<C, 'foo'>

const c: C2 = {
  abc: 'abc',
  def: false
}
