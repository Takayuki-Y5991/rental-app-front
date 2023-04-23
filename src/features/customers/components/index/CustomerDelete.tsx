import { Button } from '@mantine/core';
import React from 'react';
import { WrapModal } from '../../../../shared/Modal/components/Modal';
import { CustomerModalProps } from '../../types/CustomerModalProps';
import { useCustomerMutation } from '../../hooks/useCustomerMutation';
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';

export const CustomerDelete = ({ status, setModalState, id }: CustomerModalProps) => {
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
        header="顧客削除"
        content={<Content id={id} />}
        footer={<Footer id={id} setStatus={setModalState} status={status} />}
        setModalState={setModalState}
        status={status}
      ></WrapModal>
    </>
  );
};

const Content = ({ id }: { id: number }) => {
  return <div>顧客ID: {id} を削除いたしますか？</div>;
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
  const { deleteCustomerMutation } = useCustomerMutation();
  const navigate = useNavigate();

  const onDelete = async (id: number) => {
    deleteCustomerMutation.mutate(id);
    setStatus(!status);
    notifications.show({
      title: '顧客削除',
      message: `顧客番号 : [${id}] の顧客を削除しました。`,
    });
    navigate('/customers');
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
