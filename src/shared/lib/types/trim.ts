export type Trim<Str extends string> = Str extends `${infer V} ${infer Rest}`
  ? V extends ""
    ? Trim<Rest>
    : Trim<Rest> extends ``
      ? V
      : `${V} ${Trim<Rest>}`
  : Str;

type Res1 = Trim<"     1        2          3        ">;
type Res2 = Trim<"1        2          3        ">;
type Res3 = Trim<"12      3">;
