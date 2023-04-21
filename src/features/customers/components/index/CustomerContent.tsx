import { Grid, createStyles } from '@mantine/core';
import React from 'react';

import moment from 'moment';
import { Customer } from '../../types/Customer';

const useStyles = createStyles(() => ({
  wrapContainer: {
    marginTop: '1rem',
  },
  columns: {
    borderBottom: 'solid 0.2px #ADB5BD',
    paddingBottom: 0,
  },
}));
export const CustomerContent = ({ data }: { data: Customer }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapContainer}>
      <Grid>
        <Grid.Col span={3} className={classes.columns}>
          顧客ID
        </Grid.Col>
        <Grid.Col span={9} className={classes.columns}>
          {data.id}
        </Grid.Col>
        <Grid.Col span={3} className={classes.columns}>
          氏名
        </Grid.Col>
        <Grid.Col span={9} className={classes.columns}>
          {data.name}
        </Grid.Col>
        <Grid.Col span={3} className={classes.columns}>
          性別
        </Grid.Col>
        <Grid.Col span={9} className={classes.columns}>
          {data.sex === 1 ? '男性' : '女性'}
        </Grid.Col>
        <Grid.Col span={3} className={classes.columns}>
          誕生日
        </Grid.Col>
        <Grid.Col span={9} className={classes.columns}>
          {moment(data.birthday).format('YYYY-MM-DD')}
        </Grid.Col>
        <Grid.Col span={3} className={classes.columns}>
          パスワード
        </Grid.Col>
        <Grid.Col span={9} className={classes.columns}>
          {data.password}
        </Grid.Col>
        <Grid.Col span={3} className={classes.columns}>
          登録日
        </Grid.Col>
        <Grid.Col span={9} className={classes.columns}>
          {moment(data.registerDate).format('YYYY-MM-DD')}
        </Grid.Col>
      </Grid>
    </div>
  );
};
