'use client';

import { Chip, Container, Grid, Space } from '@mantine/core';
import { CustomTitle } from '../CustomTitle';
import classes from './Tariffe.module.css';

export const Tariffe = () => {
  return (
    <Container>
      <Space h="xl" />
      <CustomTitle>Tariffe</CustomTitle>
      <Grid columns={2} gutter="lg" className={classes.grid}>
        <Grid.Col span={1} className={classes.col}>
          <Chip size="xl">Biglietto intero</Chip>
        </Grid.Col>
        <Grid.Col span={1} className={classes.col}>
          <Chip size="xl">Biglietto ridotto</Chip>
        </Grid.Col>
        <Grid.Col span={1} className={classes.col}>
          <Chip size="xl">Biglietto 3D o IMAX</Chip>
        </Grid.Col>
        <Grid.Col span={1} className={classes.col}>
          <Chip size="xl">Carta studente</Chip>
        </Grid.Col>
        <Grid.Col span={1} className={classes.col}>
          <Chip size="xl">Martedì cinema</Chip>
        </Grid.Col>
        <Grid.Col span={1} className={classes.col}>
          <Chip size="xl">Happy hour</Chip>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
    </Container>
  );
};
