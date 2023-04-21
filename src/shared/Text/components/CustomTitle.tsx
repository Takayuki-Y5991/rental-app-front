import React from 'react';
import { Title, TitleProps } from '@mantine/core';

export const CustomTitle = ({ title }: TitleProps) => {
  return (
    <Title order={4} italic c={'blue.6'}>
      {title}
    </Title>
  );
};
