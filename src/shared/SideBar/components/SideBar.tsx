import React from 'react';
import { SideMenus } from '../types/SideMenus';
import { SideMenu } from './SideMenu';
import { Group, Navbar, createStyles, rem } from '@mantine/core';
import { IconApps } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
  },
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
      0.1
    )}`,
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },
  iconIntoText: {
    marginLeft: rem(3),
    fontWeight: 700,
  },
}));

export const SideBar = () => {
  const { classes } = useStyles();

  const links = SideMenus.map((item) => (
    <SideMenu key={item.label} link={item.link} Icon={item.Icon} label={item.label} />
  ));
  return (
    <Navbar height={'100vh'} width={{ sm: 180 }} p="md" className={classes.navbar}>
      <Navbar.Section grow>
        <Group position="apart" className={classes.header}>
          <div className={classes.icon}>
            <IconApps size={28} />
            <span className={classes.iconIntoText}>Rental-APP</span>
          </div>
        </Group>
        {links}
      </Navbar.Section>
    </Navbar>
  );
};
