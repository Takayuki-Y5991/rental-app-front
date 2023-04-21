import React from 'react';
import { Layout } from '../../../../shared/Layout/components/Layout';
import { CustomTitle } from '../../../../shared/Text/components/CustomTitle';
import { useParams } from 'react-router-dom';

export const CustomerNew = () => {
  return (
    <Layout>
      <CustomTitle title={'顧客作成'} />
    </Layout>
  );
};
