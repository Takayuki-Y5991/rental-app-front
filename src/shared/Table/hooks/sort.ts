import { AnyRecord } from '../types/AnyRecords';
import { SortPayload } from '../types/SortPayload';
import { filter } from './filter';

export const sort = <T extends AnyRecord>(data: T[], payload: SortPayload<T>): T[] => {
  const { sortBy, reversed, compareFn } = payload;

  if (!sortBy) {
    return filter(data, payload.search);
  }

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    let comparisonResult: number;
    if (compareFn) {
      comparisonResult = compareFn(aValue, bValue);
    } else if (typeof aValue === 'string' && typeof bValue === 'string') {
      comparisonResult = aValue.localeCompare(bValue);
    } else {
      comparisonResult = (aValue as any) - (bValue as any);
    }

    return reversed ? -comparisonResult : comparisonResult;
  });

  return filter(sortedData, payload.search);
};
