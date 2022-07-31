// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md

import { Readonly } from './readonly'

export type TupleToObject<Tuple extends Readonly<Array<any>>> = { [K in keyof Tuple as K extends number ? Tuple[K] : never]: Tuple[K] }

const t = ['foo', 'bar', 'abcd'] as const

type T = TupleToObject<typeof t>

const o: T = {
  foo: 'foo',
  bar: 'bar',
  abcd: 'abcd'
}
