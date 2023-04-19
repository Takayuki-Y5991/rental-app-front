import React from 'react';
import { MenuItem } from '../types/SideMenus';
import { Anchor, createStyles, getStylesRef } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
    },
  },
  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.white,
    opacity: 0.75,
    marginRight: theme.spacing.sm,
  },
}));

export const SideMenu: React.FC<MenuItem & React.HTMLAttributes<HTMLAnchorElement>> = ({
  link,
  label,
  Icon,
}: MenuItem) => {
  const { classes } = useStyles();

  return (
    <Anchor href={link} key={label} className={classes.link}>
      <Icon className={classes.linkIcon} stroke={1.5} />
      <span>{label}</span>
    </Anchor>
  );
};
