import { Box, createStyles } from '@mantine/core';
import React from 'react';
import { useBookMutation } from '../../hooks/useBookMutation';
import { notifications } from '@mantine/notifications';
import { Layout } from '../../../../shared/Layout/components/Layout';
import { CustomTitle } from '../../../../shared/Text/components/CustomTitle';
import { BookForm } from './BookForm';

const useStyles = createStyles(() => ({
  wrap: {
    width: '500px',
  },
  buttonArea: {
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const init = {
  id: 0,
  bookName: '',
  author: '',
  publisher: '',
  status: 0,
  arrivalData: undefined,
  updateDate: undefined,
};

export const BookNew = () => {
  const { classes } = useStyles();
  const { createBookMutation } = useBookMutation();

  const createNotification = () => {
    notifications.show({
      title: '書籍作成',
      message: '書籍の新規作成に成功しました。',
    });
  };

  return (
    <Layout>
      <div className={classes.wrap}>
        <CustomTitle title={'書籍作成'} />
        <Box maw={400} mx={'auto'}>
          <BookForm book={init} action={createBookMutation} notification={createNotification} />
        </Box>
      </div>
    </Layout>
  );
};
