export type FilterObjForString<T extends Record<string, unknown>> = {
  [K in keyof T as T[K] extends boolean
    ? T[K] extends true
      ? K
      : never
    : K]: T[K];
};
