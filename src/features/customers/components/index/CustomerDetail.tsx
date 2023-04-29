import React, { useState } from 'react';
import { Layout } from '../../../../shared/Layout/components/Layout';
import { CustomTitle } from '../../../../shared/Text/components/CustomTitle';
import { useParams } from 'react-router-dom';
import { useCustomerQuery } from '../../hooks/useCustomerQuery';
import { Box, createStyles } from '@mantine/core';
import { CustomerContent } from './CustomerContent';
import { CustomerDelete } from './CustomerDelete';
import { CustomerEdit } from '../new/CustomerEdit';

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

export const CustomerDetail = () => {
  const { classes } = useStyles();

  const { id } = useParams();
  const { data } = useCustomerQuery(Number(id));

  const [isDeleteModalStatus, setIsDeleteModalStatus] = useState(false);
  const [isEditModalStatus, setIsEditModalStatus] = useState(false);

  return (
    <Layout>
      <div className={classes.wrap}>
        <CustomTitle title={'顧客詳細'} />
        <Box maw={400} mx={'auto'}>
          {data && (
            <>
              <CustomerContent data={data} />
              <div className={classes.buttonArea}>
                <CustomerEdit
                  status={isEditModalStatus}
                  setModalState={setIsEditModalStatus}
                  customer={data}
                />
                <CustomerDelete
                  status={isDeleteModalStatus}
                  setModalState={setIsDeleteModalStatus}
                  id={Number(data.id)}
                />
              </div>
            </>
          )}
        </Box>
      </div>
    </Layout>
  );
};
