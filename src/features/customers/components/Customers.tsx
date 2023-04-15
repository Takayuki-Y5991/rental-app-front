import React from 'react';
import { useCustomersQuery } from '../hooks/useCustomerQuery';
import { TableSort } from '../../../shared/Table/components/Table';
import { Customer } from '../types/Customer';

export const Customers = () => {
  const { data } = useCustomersQuery();
  console.log('CUSOMTER REDNER');

  const columns: Array<{ key: keyof Customer; label: string }> = [
    { key: 'name', label: '氏名' },
    { key: 'sex', label: '性別' },
    { key: 'birthday', label: '生年月日' },
  ];
  return (
    <>
      <div>TITLE</div>
      {data && <TableSort<Customer> data={data} columns={columns} />}
    </>
  );
};
