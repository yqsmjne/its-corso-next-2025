'use client';

import { Carousel } from '@mantine/carousel';
import { Container, Space } from '@mantine/core';
import { CustomTitle } from '../CustomTitle';

export const News = () => {
  return (
    <Container>
      <Space h="xl" />
      <CustomTitle>News</CustomTitle>
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
      <Space h="xl" />
    </Container>
  );
};
