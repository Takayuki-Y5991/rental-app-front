import React, { Suspense, useState } from 'react';
import { useCustomersQuery } from '../../hooks/useCustomerQuery';
import { TableSort } from '../../../../shared/Table/components/Table';
import { Layout } from '../../../../shared/Layout/components/Layout';
import moment from 'moment';
import { CustomersTableData } from '../../types/CustomerTableData';
import { CustomerCreateButton } from './CustomerCreateButton';
import { CustomTitle } from '../../../../shared/Text/components/CustomTitle';

export const Customers = () => {
  const [offset, setOffset] = useState<number>(0);
  const { data } = useCustomersQuery({ offset: offset });

  const formatData = data?.customers.map((customer) => ({
    ...customer,
    gender: customer.gender === 1 ? '男性' : '女性',
    birthday: moment(customer.birthday).format('YYYY-MM-DD'),
  })) as CustomersTableData[];

  const columns: Array<{ key: keyof CustomersTableData; label: string }> = [
    { key: 'name', label: '氏名' },
    { key: 'gender', label: '性別' },
    { key: 'birthday', label: '生年月日' },
  ];

  const onPageChange = (page: number) => {
    setOffset((page - 1) * 10);
  };

  return (
    <Layout>
      <Suspense fallback={<p>Loading</p>}>
        <CustomTitle title={'顧客一覧'} />
        {data && (
          <TableSort<CustomersTableData>
            data={formatData}
            columns={columns}
            onCreateChild={<CustomerCreateButton />}
            onPageChange={onPageChange}
            initPage={offset}
            count={data.count}
            detailPath={'customers'}
          />
        )}
      </Suspense>
    </Layout>
  );
};
