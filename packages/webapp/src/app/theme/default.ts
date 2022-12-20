import { MantineTheme } from '@mantine/core';

const isDark = window.matchMedia('(prefers-color-scheme:dark)').matches;

export const theme: Partial<MantineTheme> = {
  colorScheme: isDark ? 'dark' : 'light',
  fontFamily: 'Kanit, sans serif',
  spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
};
