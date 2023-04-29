import { Box, Button, createStyles } from '@mantine/core';
import React from 'react';
import { CustomerEditModalProps } from '../../types/CustomerModalProps';
import { WrapModal } from '../../../../shared/Modal/components/Modal';
import { Customer } from '../../types/Customer';
import { useCustomerMutation } from '../../hooks/useCustomerMutation';
import { notifications } from '@mantine/notifications';
import { CustomerForm } from './CustomerForm';

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

export const CustomerEdit = ({ status, setModalState, customer }: CustomerEditModalProps) => {
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
        header="顧客編集"
        content={<Content customer={customer} status={status} setStatus={setModalState} />}
        setModalState={setModalState}
        status={status}
      />
    </>
  );
};

const Content = ({
  customer,
  status,
  setStatus,
}: {
  customer: Customer;
  status: boolean;
  setStatus: (args: boolean) => void;
}) => {
  const { classes } = useStyles();
  const { updateCustomerMutation } = useCustomerMutation();

  const updateNotification = () => {
    notifications.show({
      title: '顧客編集',
      message: '顧客の編集に成功しました。',
    });
  };
  return (
    <>
      <div className={classes.wrap}>
        <Box maw={400} mx={'auto'}>
          <CustomerForm
            customer={customer}
            action={updateCustomerMutation}
            notification={updateNotification}
            status={status}
            setStatus={setStatus}
          />
        </Box>
      </div>
    </>
  );
};
