// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md

export type Readonly<Object extends object> = { readonly [K in keyof Object]: Object[K] }

type C = {
  foo: string
}

const c: Readonly<C> = { foo: 'foobar' }

// c.foo = 'bar'
