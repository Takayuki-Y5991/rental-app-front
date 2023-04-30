import React from 'react';
import { BookDeleteModalProps } from '../../types/BookModalProps';
import { Button } from '@mantine/core';
import { WrapModal } from '../../../../shared/Modal/components/Modal';
import { useNavigate } from 'react-router-dom';
import { useBookMutation } from '../../hooks/useBookMutation';
import { notifications } from '@mantine/notifications';

const Content = ({ id }: { id: number }) => {
  return <div>書籍ID: {id} を削除いたしますか？</div>;
};

const Footer = ({
  id,
  status,
  setStatus,
}: {
  id: number;
  status: boolean;
  setStatus: (args: boolean) => void;
}) => {
  const { deleteBookMutation } = useBookMutation();
  const navigate = useNavigate();

  const onDelete = async (id: number) => {
    deleteBookMutation.mutate(id);
    setStatus(!status);
    notifications.show({
      title: '書籍削除',
      message: `書籍ID : [${id}] の書籍を削除しました。`,
    });
    // TODO: 書籍一覧が完成した際に修正
    navigate('/');
  };

  return (
    <Button
      mt={'1rem'}
      variant="gradient"
      gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
      onClick={() => onDelete(id)}
    >
      削除
    </Button>
  );
};

export const BookDelete = ({ status, setModalState, id }: BookDeleteModalProps) => {
  return (
    <>
      <Button
        variant="gradient"
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
        onClick={() => setModalState(!status)}
      >
        削除
      </Button>
      <WrapModal
        header="書籍削除"
        content={<Content id={id} />}
        footer={<Footer id={id} setStatus={setModalState} status={status} />}
        setModalState={setModalState}
        status={status}
      />
    </>
  );
};
