import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';

import '@mantine/core/styles.css';

import { PropsWithChildren } from 'react';
import { Header } from '../lib/header/Header';
import styles from './layout.module.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cinema Multisala Rivoli',
  description: 'Cinema Verona!',
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="it" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={styles.body}>
        <MantineProvider theme={theme}>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
