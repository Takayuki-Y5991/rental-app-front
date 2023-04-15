import { AnyRecord } from './AnyRecords';

export type SortPayload<T extends AnyRecord> = {
  sortBy: keyof T | null;
  reversed: boolean;
  search: string;
  compareFn?: (a: T[keyof T], b: T[keyof T]) => number;
};
