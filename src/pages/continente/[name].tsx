import { Flex } from '@chakra-ui/react';

import { CitiesSection } from '../../components/CitiesSection';
import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentInfo } from '../../components/ContinentInfo';

export default function Continente() {
  return (
    <Flex
      as="main"
      h="fit-content"
      w="100%"
      direction="column"
      overflowX="hidden"
    >
      {/* Banner */}
      <ContinentBanner />

      {/* Intro */}
      <ContinentInfo />

      {/* Content */}
      <CitiesSection />
    </Flex>
  );
}
