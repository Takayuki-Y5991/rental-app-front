import React, { useState } from 'react';
import { TableSortProps } from '../types/TableSortProps';
import { sort } from '../hooks/sort';
import { Button, Pagination, Table, Text, TextInput, createStyles } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { TableHeaderItem } from './TableHeaderItem';
import { AnyRecord } from '../types/AnyRecords';
import { Link } from 'react-router-dom';

const useStyles = createStyles(() => ({
  searchBox: {
    justifyContent: 'end',
    width: '50%',
  },
  headerAction: {
    display: 'flex',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1em',
  },
}));

export function TableSort<T extends AnyRecord>({
  data,
  columns,
  onCreateChild,
  onPageChange,
  initPage,
}: TableSortProps<T>) {
  const { classes } = useStyles();
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

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

  const rows = sortedData.map((row, index) => (
    <tr key={index}>
      {columns.map((column) => (
        <td key={column.key.toString()}>{String(row[column.key])}</td>
      ))}
      <td>
        <Link to={`/customers/${row.id}`}>
          <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
            詳細へ
          </Button>
        </Link>
      </td>
    </tr>
  ));

  return (
    <>
      <div className={classes.headerAction}>
        {onCreateChild}
        <TextInput
          placeholder="Search by any field"
          mb="md"
          icon={<IconSearch size="0.9rem" stroke={1.5} />}
          value={search}
          onChange={handleSearchChange}
          className={classes.searchBox}
        />
      </div>
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
      <div>
        <Pagination
          total={100}
          siblings={3}
          defaultValue={initPage}
          className={classes.pagination}
          onChange={onPageChange}
        />
      </div>
    </>
  );
}
