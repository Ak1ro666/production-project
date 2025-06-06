export type FilterTupleForUndefinedOrNull<T extends readonly unknown[]> =
  T extends [infer FirstValue, ...infer Rest]
    ? FirstValue extends null | undefined
      ? [...FilterTupleForUndefinedOrNull<Rest>]
      : [FirstValue, ...FilterTupleForUndefinedOrNull<Rest>]
    : T extends [infer V]
      ? [V]
      : [];

type R1 = FilterTupleForUndefinedOrNull<
  [undefined, "white", undefined, null, "black"]
>;
//   ^?
