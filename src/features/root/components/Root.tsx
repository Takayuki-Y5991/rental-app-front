import { Button, Center, Stack } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <Center maw={500} h={200} mx="auto">
        <h1>Welcome to Rental APP</h1>
      </Center>
      <Center maw={500} h="auto" mx="auto">
        <Stack
          h={200}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          })}
        >
          <Link to="/customers">
            <Button variant="outline">顧客管理</Button>
          </Link>
          <Button variant="outline" onClick={() => window.alert('工事中')}>
            図書管理
          </Button>
        </Stack>
      </Center>
    </>
  );
};
