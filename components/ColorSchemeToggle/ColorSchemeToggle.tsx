'use client';

import { Button, Group, useMantineColorScheme, Switch, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme,toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Group justify="center" mt="xl">
        <Switch
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        size="lg"
        onLabel={<IconSun color={theme.white} size="1rem" stroke={1.5} />}
        offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
      />
    </Group>
  );
}
