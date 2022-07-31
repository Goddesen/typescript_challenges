// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md

/*
  3 - Omit
  -------
  by Anthony Fu (@antfu) #medium #union #built-in

  ### Question

  Implement the built-in `Omit<T, K>` generic without using it.

  Constructs a type by picking all properties from `T` and then removing `K`

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
  ```

  > View on GitHub: https://tsch.js.org/3
*/


/* _____________ Your Code Here _____________ */

export type MyOmit<Object extends object, Keys extends keyof Object> = { [K in keyof Object as K extends Keys ? never : K]: Object[K] }


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
title: string
description: string
completed: boolean
}

interface Expected1 {
title: string
completed: boolean
}

interface Expected2 {
title: string
}
