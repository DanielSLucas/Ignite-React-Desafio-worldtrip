import { Flex } from '@chakra-ui/react';

import { HomeBanner } from '../components/HomeBanner';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex as="main" flex="1" direction="column">
      <HomeBanner />
      <TravelTypes />
    </Flex>
  );
}
