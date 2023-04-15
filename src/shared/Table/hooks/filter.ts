import { AnyRecord } from '../types/AnyRecords';

export const filter = <T extends AnyRecord>(
  data: T[],
  search: string,
  keys?: Array<keyof T>
): T[] => {
  const query = search.toLowerCase().trim();
  const searchKeys = keys ?? (data[0] ? (Object.keys(data[0]) as Array<keyof T>) : []);
  return data.filter((item) =>
    searchKeys.some((key) => {
      const value = item[key];
      return typeof value === 'string' && value.toLowerCase().includes(query);
    })
  );
};
