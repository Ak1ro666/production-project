import { FilterObjForString } from "./filter-obj-for-string";
import type { Push } from "./push";

export type IsNever<T> = [T] extends [never] ? true : false;
export type UnionToIntersection<Union> = (
  Union extends unknown ? (distributedUnion: Union) => void : never
) extends (mergedIntersection: infer Intersection) => void
  ? Intersection
  : never;

export type LastOf<T> =
  UnionToIntersection<T extends unknown ? () => T : never> extends () => infer R
    ? R
    : never;

export type TuplifyUnion<T, L = LastOf<T>> =
  IsNever<T> extends true ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;

export type ObjectToTuple<T> = TuplifyUnion<
  {
    [K in keyof T]: [K, T[K]];
  }[keyof T]
>;

export type GetFirstArgForTupleTuples<T extends readonly unknown[]> =
  T extends [infer V, ...infer Rest]
    ? V extends readonly unknown[]
      ? [...GetFirstArgForTupleTuples<V>, ...GetFirstArgForTupleTuples<Rest>]
      : T extends [infer V, ...infer _]
        ? [V]
        : []
    : [];

type Res = GetFirstArgForTupleTuples<
  ObjectToTuple<
    FilterObjForString<{
      green: true;
      yellow: false;
      black: "white";
      white: "black";
    }>
  >
>;
//   ^?
