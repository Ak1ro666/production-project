export type IsTupleEmpty<T extends readonly unknown[]> = T extends []
  ? true
  : false;
