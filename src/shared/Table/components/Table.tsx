import React, { useState } from 'react';
import { TableSortProps } from '../types/TableSortProps';
import { sort } from '../hooks/sort';
import { ScrollArea, Table, Text, TextInput } from '@mantine/core';
import { IconEdit, IconSearch, IconTrash } from '@tabler/icons-react';
import { TableHeaderItem } from './TableHeaderItem';
import { AnyRecord } from '../types/AnyRecords';

export function TableSort<T extends AnyRecord>({
  data,
  columns,
  onDelete,
  onEdit,
}: TableSortProps<T>) {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const setSorting = (field: keyof T) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sort(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sort(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const handleActionButtonClick = (action: (item: T) => React.ReactNode, item: T) => {
    setModalContent(action(item));
    setModalOpen(true);
  };

  const rows = sortedData.map((row, index) => (
    <tr key={index}>
      {columns.map((column) => (
        <td key={column.key.toString()}>{String(row[column.key])}</td>
      ))}
      <td>
        {onEdit && (
          <button onClick={() => handleActionButtonClick(onEdit, row)}>
            <IconEdit size={16} />
          </button>
        )}
        {onDelete && (
          <button onClick={() => handleActionButtonClick(onDelete, row)}>
            <IconTrash size={16} />
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<IconSearch size="0.9rem" stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} sx={{ tableLayout: 'fixed' }}>
        <thead>
          <tr>
            {columns.map((column) => (
              <TableHeaderItem
                key={column.key as string}
                sorted={sortBy === column.key}
                reversed={reverseSortDirection}
                onSort={() => setSorting(column.key)}
              >
                {column.label}
              </TableHeaderItem>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={columns.length}>
                <Text weight={500} align="center">
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
