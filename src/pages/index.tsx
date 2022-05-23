import { Box, Divider, Flex, Heading } from '@chakra-ui/react';

import { HomeBanner } from '../components/HomeBanner';
import { Slider } from '../components/Slider';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex
      as="main"
      h="fit-content"
      w="100%"
      direction="column"
      overflowX="hidden"
    >
      <HomeBanner />
      <TravelTypes />

      <Box w="30%" maxW={90} mx="auto">
        <Divider borderColor="dark.headings" />
      </Box>

      <Flex
        as="section"
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        my="6"
      >
        <Heading
          fontWeight="medium"
          fontSize={['xl', '4xl']}
          color="dark.headings"
          mb={['6', '12']}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>

        <Slider />
      </Flex>
    </Flex>
  );
}
