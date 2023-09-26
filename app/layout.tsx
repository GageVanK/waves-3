'use client';
import '@mantine/core/styles.css';
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { MantineProvider, ColorSchemeScript, AppShell, Button } from '@mantine/core';
import { theme } from '../theme';
import { DeSoIdentityProvider } from "react-deso-protocol";
import { MantineHeader } from '../components/MantineAppShell/MantineHeader/MantineHeader';


export default function RootLayout({ children }: { children: any }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <DeSoIdentityProvider>
        <MantineProvider theme={theme}>
        
        <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'md',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header><MantineHeader /></AppShell.Header>
      <AppShell.Navbar>Navbar</AppShell.Navbar>
      <AppShell.Main >
        <Button onClick={toggleDesktop} visibleFrom="sm">
          Toggle navbar
        </Button>
       
          {children}
          </AppShell.Main>
   </AppShell>
          
          </MantineProvider>
          </DeSoIdentityProvider>
      </body>
    </html>
  );
}
