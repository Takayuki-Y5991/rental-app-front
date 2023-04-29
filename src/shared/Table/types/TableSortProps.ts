import { AnyRecord } from './AnyRecords';

/**
 * Table Props
 *
 *  @params {data} record
 *  @params {columns} columns
 */
export interface TableSortProps<T extends AnyRecord> {
  data: T[];
  columns: Array<{
    key: keyof T;
    label: string;
  }>;
  onCreateChild?: React.ReactNode;
  onPageChange?: (page: number) => void;
  initPage?: number;
  count: number;
}
