export type JoinTuple<T extends unknown[], S extends string = " "> = T extends [
  infer V,
  ...infer Rest,
]
  ? Rest extends []
    ? `${V & string}${JoinTuple<Rest, S>}`
    : `${V & string}${S}${JoinTuple<Rest, S>}`
  : "";

type R1 = JoinTuple<["white", "black"]>;
//   ^?
type R2 = JoinTuple<["black", "black", "yellow"], ".">;
//   ^?
