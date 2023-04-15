import React from 'react';
import { TableHeaderProps } from '../types/TableHeaderProps';
import { IconChevronDown, IconChevronUp, IconSelector } from '@tabler/icons-react';
import '../table.module.scss';
import { Group, UnstyledButton, Text, Center } from '@mantine/core';

export const TableHeaderItem = ({ children, reversed, sorted, onSort }: TableHeaderProps) => {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <th className="th">
      <UnstyledButton onClick={onSort} className="control">
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className="icon">
            <Icon size="0.9rem" stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  );
};
