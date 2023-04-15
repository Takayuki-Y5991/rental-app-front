import { AnyRecord } from './AnyRecords';

/**
 * Table Props
 *
 *  @params {data} record
 *  @params {columns} columns
 * @params {onEdit} Edit Modal
 * @params {onDelete} Delete Modal
 */
export interface TableSortProps<T extends AnyRecord> {
  data: T[];
  columns: Array<{
    key: keyof T;
    label: string;
  }>;
  onEdit?: (item: T) => React.ReactNode;
  onDelete?: (item: T) => React.ReactNode;
}
