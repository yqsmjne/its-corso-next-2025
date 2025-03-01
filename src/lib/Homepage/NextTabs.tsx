'use client';

import { Carousel } from '@mantine/carousel';

import '@mantine/carousel/styles.css';

import { Tabs } from '@mantine/core';
import classes from './NextTabs.module.css';

export const NextTabs = () => {
  return (
    <Tabs defaultValue="byMovie" variant="none">
      <Tabs.List justify="center">
        <Tabs.Tab value="byMovie" className={classes.tab}>
          Scegli il film
        </Tabs.Tab>
        <Tabs.Tab value="byDay" className={classes.tab}>
          Scegli il giorno
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="byMovie">
        By Movie
        <Carousel
          withIndicators
          height={400}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
        </Carousel>
      </Tabs.Panel>
      <Tabs.Panel value="byDay">
        By Day
        <Carousel
          withIndicators
          height={400}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      </Tabs.Panel>
    </Tabs>
  );
};
