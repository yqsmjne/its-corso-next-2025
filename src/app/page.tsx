import { Box, Center } from '@mantine/core';
import { Today } from '@/lib/Homepage/Today';
import { CustomTitle } from '../lib/CustomTitle';
import { Download } from '../lib/Homepage/Download';
import { News } from '../lib/Homepage/News';
import { NextTabs } from '../lib/Homepage/NextTabs';
import { Tariffe } from '../lib/Homepage/Tariffe';

export default function HomePage() {
  return (
    <Box>
      <Today />
      <Center>
        <CustomTitle>Tutti i film in programmazione</CustomTitle>
      </Center>
      <Box>
        <NextTabs />
      </Box>
      <Tariffe />
      <Download />
      <News />
    </Box>
  );
}
