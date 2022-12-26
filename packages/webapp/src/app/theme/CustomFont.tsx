import { Global } from '@mantine/core';
import './kanit/Kanit-ExtraLight.woff';
import './kanit/Kanit-Light.woff';
import './kanit/Kanit-Thin.woff';
import './kanit/Kanit-Regular.woff';
import './kanit/Kanit-Medium.woff';
import './kanit/Kanit-SemiBold.woff';
import './kanit/Kanit-Bold.woff';
import './kanit/Kanit-ExtraBold.woff';
import './kanit/Kanit-Black.woff';

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Kanit',
            src: `url('./kanit/Kanit-ExtraLight.woff') format("woff2")`,
            fontWeight: 100,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kanit',
            src: `url('./kanit/Kanit-Light.woff') format("woff2")`,
            fontWeight: 200,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kanit',
            src: `url('./kanit/Kanit-Thin.woff') format("woff2")`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kanit',
            src: `url('./kanit/Kanit-Regular.woff') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kanit',
            src: `url('./kanit/Kanit-Medium.woff') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kanit',
            src: `url('./kanit/Kanit-SemiBold.woff') format("woff2")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kanit',
            src: `url('./kanit/Kanit-Bold.woff') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kanit',
            src: `url('./kanit/Kanit-ExtraBold.woff') format("woff2")`,
            fontWeight: 800,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kanit',
            src: `url('./kanit/Kanit-Black.woff') format("woff2")`,
            fontWeight: 900,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
