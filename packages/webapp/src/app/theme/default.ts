import { MantineTheme } from '@mantine/core';

const isDark = window.matchMedia('(prefers-color-scheme:dark)').matches;

export const theme: Partial<MantineTheme> = {
  colorScheme: isDark ? 'dark' : 'light',
  fontFamily: 'Kanit, sans serif',
  spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  defaultRadius: 'xs',
  radius: {
    xs: 0,
    sm: 2,
    md: 4,
    lg: 8,
    xl: 16,
  },
  headings: {
    fontFamily: 'Kanit, sans serif',
    fontWeight: 600,
    sizes: {
      h1: {
        fontWeight: 900,
        fontSize: 'xl',
        lineHeight: 'md',
      },
      h2: {
        fontWeight: 700,
        fontSize: 'md',
        lineHeight: 'md',
      },
      h3: {
        fontWeight: 600,
        fontSize: 'md',
        lineHeight: 'sm',
      },
      h4: {
        fontWeight: 500,
        fontSize: 'sm',
        lineHeight: 'sm',
      },
      h5: {
        fontWeight: 400,
        fontSize: 'sm',
        lineHeight: 'xs',
      },
      h6: {
        fontWeight: 200,
        fontSize: 'xs',
        lineHeight: 'xs',
      },
    },
  },
};
