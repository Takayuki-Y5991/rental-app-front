import React, { Suspense, useState } from 'react';
import { useBooksQuery } from '../../hooks/useBookQuery';
import { BookStatus } from '../../types/Book';
import { BookTableData } from '../../types/BookTableData';
import moment from 'moment';
import { Layout } from '../../../../shared/Layout/components/Layout';
import { CustomTitle } from '../../../../shared/Text/components/CustomTitle';
import { TableSort } from '../../../../shared/Table/components/Table';
import { BookCreateButton } from './BookCreateButton';

export const Books = () => {
  const [offset, setOffset] = useState<number>(0);
  const { data } = useBooksQuery({ offset: offset });

  const formatStatus = (status: number) => {
    switch (status) {
      case BookStatus.IN_STOCK:
        return '在庫あり';
      case BookStatus.ON_RENT:
        return 'レンタル中';
      default:
        return '削除済み';
    }
  };
  const formatData = data?.books.map((book) => ({
    ...book,
    status: formatStatus(book.status),
    arrivalDate: moment(book.arrivalDate).format('YYYY-MM-DD'),
  })) as BookTableData[];

  const columns: Array<{ key: keyof BookTableData; label: string }> = [
    { key: 'bookName', label: '書籍名' },
    { key: 'author', label: '著者' },
    { key: 'publisher', label: '出版社' },
    { key: 'status', label: 'ステータス' },
    { key: 'arrivalDate', label: '入荷日' },
  ];

  const onPageChange = (page: number) => {
    setOffset((page - 1) * 10);
  };

  return (
    <Layout>
      <Suspense fallback={<p>Loading</p>}>
        <CustomTitle title={'書籍一覧'} />
        {data && (
          <TableSort<BookTableData>
            data={formatData}
            columns={columns}
            onCreateChild={<BookCreateButton />}
            onPageChange={onPageChange}
            initPage={offset}
            count={data.count}
            detailPath={'books'}
          />
        )}
      </Suspense>
    </Layout>
  );
};
