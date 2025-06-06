export type Simplify<Obj extends Record<string, unknown>> = {
  [K in keyof Obj]: Obj[K];
} & {};
