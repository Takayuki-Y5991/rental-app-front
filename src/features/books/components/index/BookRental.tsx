import React from 'react';
import { BookRentalModalProps } from '../../types/BookModalProps';
import { Button } from '@mantine/core';
import { WrapModal } from '../../../../shared/Modal/components/Modal';
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { useRentalMutation } from '../../hooks/useRentalMutation';
import { Book } from '../../types/Book';

const Content = ({ bookName }: { bookName: string }) => {
  return <div>書籍名: {bookName} をレンタルいたしますか？</div>;
};

const Footer = ({
  book,
  status,
  setStatus,
}: {
  book: Book;
  status: boolean;
  setStatus: (args: boolean) => void;
}) => {
  const { createRentalMutation } = useRentalMutation();
  const navigate = useNavigate();

  const onRental = async (book: Book) => {
    createRentalMutation.mutate({
      customerId: 2,
      bookIds: [Number(book.id)],
    });
    setStatus(!status);
    notifications.show({
      title: 'レンタル実行',
      message: `書籍名 : [${book.bookName}] をレンタルしました。`,
    });
    // TODO: 書籍一覧が完成した際に修正
    navigate('/books');
  };

  return (
    <Button
      mt={'1rem'}
      variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan' }}
      onClick={() => onRental(book)}
    >
      レンタル
    </Button>
  );
};

export const BookRental = ({ status, setModalState, book }: BookRentalModalProps) => {
  return (
    <>
      <Button
        variant="gradient"
        ml="1rem"
        gradient={{ from: 'indigo', to: 'cyan' }}
        onClick={() => setModalState(!status)}
      >
        レンタル
      </Button>
      <WrapModal
        header="レンタル"
        content={<Content bookName={book.bookName} />}
        footer={<Footer book={book} setStatus={setModalState} status={status} />}
        setModalState={setModalState}
        status={status}
      />
    </>
  );
};
