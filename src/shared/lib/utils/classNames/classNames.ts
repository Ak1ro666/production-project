import type {
  AdditionalType,
  ClassNameType,
  CreateResultClassNameValue,
  ModsType,
} from "./domain/types";

export default function classNames<
  C extends ClassNameType,
  M extends ModsType,
  A extends AdditionalType,
>(
  cls: C,
  mods: M = {} as unknown as M,
  additional: A = [] as unknown as A,
): CreateResultClassNameValue<C, M, A> {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ") as CreateResultClassNameValue<C, M, A>;
}

type R1 = CreateResultClassNameValue<
  "blue",
  { green: true; yellow: false },
  [undefined, "white", undefined, null, "black"]
>; // 'blue white black green';
//   ^?
type R2 = CreateResultClassNameValue<"blue", {}, ["white"]>; // 'blue white black green';
//   ^?
