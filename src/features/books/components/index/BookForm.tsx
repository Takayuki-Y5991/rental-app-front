import React from 'react';
import { BookFormProps } from '../../types/BookFormProps';
import { useForm } from '@mantine/form';
import moment from 'moment';
import { Book } from '../../types/Book';
import { Button, Select, TextInput, createStyles } from '@mantine/core';
import { DateInput } from '@mantine/dates';

const useStyles = createStyles(() => ({
  wrapContainer: {
    marginTop: '1rem',
  },
  columns: {
    marginBottom: '1rem',
  },
  buttonArea: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

export const BookForm = ({ book, action, notification, status, setStatus }: BookFormProps) => {
  const { classes } = useStyles();

  console.log(book);

  const form = useForm({
    initialValues: {
      id: book.id,
      bookName: book.bookName,
      author: book.author,
      publisher: book.publisher,
      status: book.status,
      arrivalData: book.arrivalData ? new Date(book.arrivalData) : null,
      updateDate: book.updateDate ? new Date(book.updateDate) : null,
    },
    validate: {
      bookName: (value) => (value.length <= 1 ? '書籍名を入力してください。' : null),
      author: (value) => (value.length <= 1 ? '著書名を入力してください。' : null),
      publisher: (value) => (value.length <= 1 ? '出版社を入力してください。' : null),
      status: (value) => (value === undefined ? '状態を選択してください。' : null),
    },
    transformValues: (values) => ({
      id: values.id,
      bookName: values.bookName,
      author: values.author,
      publisher: values.publisher,
      status: Number(values.status),
      arrivalData:
        values.arrivalData !== undefined
          ? moment(values.arrivalData).format('YYYY-MM-DDTHH:mm:ss.SSSSSS')
          : null,
      updateDate:
        values.updateDate !== undefined
          ? moment(values.updateDate).format('YYYY-MM-DDTHH:mm:ss.SSSSSS')
          : null,
    }),
  });

  const onSubmit = (values: {
    id?: number;
    bookName: string;
    author: string;
    publisher: string;
    status: number;
    arrivalData: string | null;
    updateDate: string | null;
  }) => {
    const bookData: Book = {
      ...values,
      arrivalData: values.arrivalData
        ? moment(values.arrivalData).format('YYYY-MM-DDTHH:mm:ss.SSSSSS')
        : undefined,
      updateDate: values.updateDate
        ? moment(values.updateDate).format('YYYY-MM-DDTHH:mm:ss.SSSSSS')
        : undefined,
    };
    action.mutate(bookData);
    form.reset();
    if (status !== undefined) {
      setStatus?.(!status);
      window.location.reload();
    }
    notification();
  };

  return (
    <div className={classes.wrapContainer}>
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <TextInput
          className={classes.columns}
          label="書籍名"
          placeholder="ex: 存在と時間"
          withAsterisk
          {...form.getInputProps('bookName')}
        />
        <TextInput
          className={classes.columns}
          label="著者"
          placeholder="ex: Martin Heidegger"
          withAsterisk
          {...form.getInputProps('author')}
        />
        <TextInput
          className={classes.columns}
          label="出版社"
          placeholder="ex: ちくま学芸文庫"
          withAsterisk
          {...form.getInputProps('publisher')}
        />
        {book.status !== undefined && (
          <Select
            className={classes.columns}
            label="状態"
            placeholder="ex: レンタル中"
            defaultValue={book.status?.toString()}
            withAsterisk
            data={[
              { value: '0', label: '在庫なし' },
              { value: '1', label: 'レンタル中' },
              { value: '2', label: '削除済み' },
            ]}
            {...form.getInputProps('status')}
          />
        )}
        {book.arrivalData && (
          <DateInput
            className={classes.columns}
            label="入荷日"
            valueFormat="YYYY-MM-DDTHH:mm:ss.SSSSSS"
            placeholder="ex: 1990-01-01T......"
            withAsterisk
            {...form.getInputProps('arrivalData')}
          />
        )}
        <div className={classes.buttonArea}>
          <Button
            type="submit"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}
            w={100}
          >
            登録
          </Button>
        </div>
      </form>
    </div>
  );
};
