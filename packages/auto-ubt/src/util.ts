export interface Test {
  name: string
}

export type PickTest<T extends Record<PropertyKey, any>> = {
  [P in keyof T]?: T[P]
}