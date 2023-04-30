import React from 'react';
import { createStyles, Grid } from '@mantine/core';
import { Book, BookStatus } from '../../types/Book';
import moment from 'moment';

const useStyles = createStyles(() => ({
  wrapContainer: {
    marginTop: '1rem',
  },
  columns: {
    borderBottom: 'solid 0.2px #ADB5BD',
    paddingBottom: 0,
  },
}));

const ContentItem = ({ title, value }: { title: string; value: any }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes } = useStyles();
  return (
    <>
      <Grid.Col span={3} className={classes.columns}>
        {title}
      </Grid.Col>
      <Grid.Col span={9} className={classes.columns}>
        {value}
      </Grid.Col>
    </>
  );
};

export const BookContent = ({ data }: { data: Book }) => {
  const { classes } = useStyles();

  const transformStatus = (status: number) => {
    switch (status) {
      case BookStatus.IN_STOCK:
        return '在庫あり';
      case BookStatus.ON_RENT:
        return 'レンタル中';
      case BookStatus.DELETED:
        return '削除済み';
    }
  };

  return (
    <>
      <div className={classes.wrapContainer}>
        <Grid>
          <ContentItem title="書籍ID" value={data.id} />
          <ContentItem title="書籍名" value={data.bookName} />
          <ContentItem title="著者" value={data.author} />
          <ContentItem title="出版社" value={data.publisher} />
          <ContentItem title="状態" value={transformStatus(data.status)} />
          {data.arrivalData && (
            <ContentItem title="入荷日" value={moment(data.arrivalData).format('YYYY-MM-DD')} />
          )}
        </Grid>
      </div>
    </>
  );
};
