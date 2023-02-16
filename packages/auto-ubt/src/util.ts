export interface Test {
  name: string;
}

export type PickTest<T extends Record<PropertyKey, any>> = {
  [P in keyof T]?: T[P];
};

export type OmitTest<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
interface T1 {
  age: number;
  name: string;
  hobby: Symbol;
}
export type T2 = OmitTest<T1, "hobby">;
// type T2 = {
//   age: number;
//   name: string;
// }
export const name = "auto-ubt";
