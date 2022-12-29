import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {
  AppShell,
  MediaQuery,
  Navbar,
  useMantineTheme,
  Text,
  Aside,
  Header,
  Burger,
  createStyles,
  ScrollArea,
} from '@mantine/core';
import React, { useState } from 'react';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
} from '@tabler/icons';
import { LinksGroup } from '../home/NavbarLinkGroup';
import { UserButton } from '../home/NavbarButton';
import { Link } from 'react-router-dom';

interface DefaultLayoutProps {
  children: ReactJSXElement;
}

const mockdata = [
  { label: 'Dashboard', icon: IconGauge, link: '/' },

  {
    label: 'Produk',
    icon: IconCalendarStats,
    links: [
      { label: 'List Produk', link: '/products' },
      { label: 'Add Produk', link: '/products/add' },
    ],
  },
  {
    label: 'Category',
    icon: IconPresentationAnalytics,
    links: [
      { label: 'List Category', link: '/cateory' },
      { label: 'Add Category', link: '/category/edit' },
    ],
  },
  {
    label: 'Order',
    icon: IconFileAnalytics,
    links: [
      { label: 'Antrian', link: '/orders' },
      { label: 'Riwayat', link: '/orders/add' },
    ],
  },
  {
    label: 'User',
    icon: IconNotes,
    links: [
      { label: 'List Users', link: '/users' },
      { label: 'Add Users', link: '/users/add' },
    ],
  },
  {
    label: 'Reports',
    icon: IconAdjustments,
    link: '/reports',
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    textDecoration: 'none',
  },

  linksInner: {
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,

    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} closeMenu={setOpened} />
  ));
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          height={'90%'}
          p="md"
          className={classes.navbar}
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section grow className={classes.links} component={ScrollArea}>
            <div className={classes.linksInner}>{links}</div>
          </Navbar.Section>
          <Navbar.Section className={classes.footer}>
            <UserButton
              image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              name="User name"
              email="user@yuhuu.com"
            />
          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Widget</Text>
          </Aside>
        </MediaQuery>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text component={Link} size={'xl'} to={'/'}>
              Janettra CMS
            </Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
