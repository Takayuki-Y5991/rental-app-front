import React from 'react';
import { Layout } from '../../../../shared/Layout/components/Layout';
import { CustomTitle } from '../../../../shared/Text/components/CustomTitle';
import { Box, createStyles } from '@mantine/core';
import { useCustomerMutation } from '../../hooks/useCustomerMutation';
import { CustomerForm } from './CustomerForm';
import { notifications } from '@mantine/notifications';

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
  name: '',
  sex: 0,
  password: '',
  birthday: undefined,
  registerDate: undefined,
  updateDate: undefined,
};
export const CustomerNew = () => {
  const { classes } = useStyles();
  const { createCustomerMutation } = useCustomerMutation();

  const createNotification = () => {
    notifications.show({
      title: '顧客作成',
      message: '顧客の新規作成に成功しました。',
      // autoClose: 3,
    });
  };

  return (
    <Layout>
      <div className={classes.wrap}>
        <CustomTitle title={'顧客作成'} />
        <Box maw={400} mx={'auto'}>
          <CustomerForm
            customer={init}
            action={createCustomerMutation}
            notification={createNotification}
          />
        </Box>
      </div>
    </Layout>
  );
};
