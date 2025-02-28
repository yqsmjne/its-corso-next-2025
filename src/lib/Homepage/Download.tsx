'use client';

import { Chip, Container, Grid, Space } from '@mantine/core';
import { CustomTitle } from '../CustomTitle';

export const Download = () => {
  return (
    <Container>
      <Space h="xl" />
      <CustomTitle>Scarica l'app</CustomTitle>
      <Grid columns={2} gutter="lg">
        <Grid.Col span={1}>
          <Chip size="xl">IOS</Chip>
        </Grid.Col>
        <Grid.Col span={1}>
          <Chip size="xl">Android</Chip>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
    </Container>
  );
};
