import { Container, createStyles } from '@mantine/core';
import React from 'react';

interface EmptyLayoutProps {
  children: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  container: {
    padding: [theme.spacing.xl * 4, theme.spacing.xl * 12],
    marginTop: theme.spacing.xl * 2,
  },
}));

export default function EmptyLayout({ children }: EmptyLayoutProps) {
  const { classes } = useStyles();

  return (
    <Container size={'xs'} className={classes.container}>
      {children}
    </Container>
  );
}
