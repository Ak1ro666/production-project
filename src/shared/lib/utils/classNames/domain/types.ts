import type { FilterObjForString } from "@/shared/lib/types/filter-obj-for-string";
import type { FilterTupleForUndefinedOrNull } from "@/shared/lib/types/filter-tuple";
import type { IsObjectEmpty } from "@/shared/lib/types/is-obj-empty";
import type { IsTupleEmpty } from "@/shared/lib/types/is-tuple-empty";
import type { JoinTuple } from "@/shared/lib/types/join-tuple";
import type {
  GetFirstArgForTupleTuples,
  ObjectToTuple,
} from "@/shared/lib/types/object-to-tuple";

export type ModsType = Record<string, unknown>;
export type AdditionalType = readonly (undefined | string)[];
export type ClassNameType = string;

export type CreateResultClassNameValue<
  Classname extends ClassNameType,
  Mods extends ModsType = {},
  Additional extends AdditionalType = []
> = `${Classname}${IsTupleEmpty<Additional> extends true ? "" : " "}${JoinTuple<
  FilterTupleForUndefinedOrNull<Additional>
>}${IsObjectEmpty<Mods> extends true ? "" : " "}${JoinTuple<
  GetFirstArgForTupleTuples<ObjectToTuple<FilterObjForString<Mods>>>
>}`;
