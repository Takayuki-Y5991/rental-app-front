import { Button, createStyles } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = createStyles(() => ({
  createButton: {
    justifyContent: 'end',
    marginRight: '10px',
    marginLeft: '70%',
  },
}));

export const BookCreateButton = () => {
  const { classes } = useStyles();
  return (
    <Link to={'/books/new'} className={classes.createButton}>
      <Button variant="gradient" gradient={{ from: 'orange', to: 'blue', deg: 60 }}>
        新規作成
      </Button>
    </Link>
  );
};
