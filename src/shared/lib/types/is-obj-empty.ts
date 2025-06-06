export type IsObjectEmpty<T extends Record<string, unknown>> =
  keyof T extends never ? true : false;
