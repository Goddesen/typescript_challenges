// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

export type First<A extends [any, ...any[]]> = A[0]

type A = ['a', 'b', 'c']

type A_Head = First<A>
