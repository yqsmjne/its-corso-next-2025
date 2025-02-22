import { Center } from '@mantine/core';

export default async function SchedaFilm(params: Promise<{ title: string }>) {
  const title = (await params).title;
  console.log('title', title);
  return <Center>TODO: Scheda film {title}</Center>;
}
