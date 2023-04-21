import { Button } from '@mantine/core';
import React from 'react';
import { WrapModal } from '../../../../shared/Modal/components/Modal';
import { CustomerModalProps } from '../../types/CustomerModalProps';
import { useCustomerMutation } from '../../hooks/useCustomerMutation';

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
  const mutation = useCustomerMutation();
  const onDelete = (id: number) => {
    // mutation.deleteCustomerMutation(id);
    setStatus(!status);
  };

  return (
    <Button
      mt={'1rem'}
      variant="gradient"
      gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
      onClick={() => setStatus(!status)}
    >
      削除
    </Button>
  );
};
