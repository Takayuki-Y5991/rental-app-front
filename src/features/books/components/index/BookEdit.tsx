import { Box, Button, createStyles } from '@mantine/core';
import React from 'react';
import { BookEditModalProps } from '../../types/BookModalProps';
import { WrapModal } from '../../../../shared/Modal/components/Modal';
import { notifications } from '@mantine/notifications';
import { useBookMutation } from '../../hooks/useBookMutation';
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

const Content = ({ book, status, setModalState }: BookEditModalProps) => {
  const { classes } = useStyles();
  const { updateBookMutation } = useBookMutation();

  const updateNotification = () => {
    notifications.show({
      title: '書籍編集',
      message: '書籍の編集に成功しました。',
    });
  };
  return (
    <>
      <div className={classes.wrap}>
        <Box maw={400} mx={'auto'}>
          <BookForm
            book={book}
            action={updateBookMutation}
            notification={updateNotification}
            status={status}
            setStatus={setModalState}
          />
        </Box>
      </div>
    </>
  );
};

export const BookEdit = ({ status, setModalState, book }: BookEditModalProps) => {
  return (
    <>
      <Button
        variant="gradient"
        gradient={{ from: 'teal', to: 'lime', deg: 105 }}
        mr="1rem"
        onClick={() => setModalState(!status)}
      >
        編集
      </Button>
      <WrapModal
        header="書籍編集"
        content={<Content book={book} status={status} setModalState={setModalState} />}
        setModalState={setModalState}
        status={status}
      />
    </>
  );
};
