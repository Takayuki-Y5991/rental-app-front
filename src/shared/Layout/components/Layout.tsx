import React from 'react';
import { SideBar } from '../../SideBar/components/SideBar';
import { Card, Flex } from '@mantine/core';

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Flex mih={50} gap={'md'}>
        <SideBar />
        <Flex justify={'center'} mih={50} gap={'md'} align={'flex-start'} direction={'row'} p={50}>
          <Card shadow="sm" padding={'lg'} withBorder>
            {children}
          </Card>
        </Flex>
      </Flex>
    </>
  );
};
