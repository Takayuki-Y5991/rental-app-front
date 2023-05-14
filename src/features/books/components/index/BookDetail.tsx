import { Box, createStyles } from '@mantine/core';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBookQuery } from '../../hooks/useBookQuery';
import { Layout } from '../../../../shared/Layout/components/Layout';
import { CustomTitle } from '../../../../shared/Text/components/CustomTitle';
import { BookContent } from './BookContent';
import { BookEdit } from './BookEdit';
import { BookDelete } from './BookDelete';
import { BookRental } from './BookRental';

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

export const BookDetail = () => {
  const { classes } = useStyles();
  const { id } = useParams();
  const { data } = useBookQuery(Number(id));

  const [isDeleteModalStatus, setIsDeleteModalStatus] = useState(false);
  const [isEditModalStatus, setIsEditModalStatus] = useState(false);
  const [isRentalModalStatus, setIsRentalModalStatus] = useState(false);

  return (
    <>
      <Layout>
        <div className={classes.wrap}>
          <CustomTitle title={'書籍詳細'} />
          <Box maw={400} mx={'auto'}>
            {data && (
              <>
                <BookContent data={data} />
                <div className={classes.buttonArea}>
                  <BookEdit
                    status={isEditModalStatus}
                    setModalState={setIsEditModalStatus}
                    book={data}
                  />
                  <BookDelete
                    status={isDeleteModalStatus}
                    setModalState={setIsDeleteModalStatus}
                    id={Number(data.id)}
                  />
                  <BookRental
                    status={isRentalModalStatus}
                    setModalState={setIsRentalModalStatus}
                    book={data}
                  />
                </div>
              </>
            )}
          </Box>
        </div>
      </Layout>
    </>
  );
};
