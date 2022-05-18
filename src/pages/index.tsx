import { Box, Divider, Flex, Heading } from '@chakra-ui/react';

import { HomeBanner } from '../components/HomeBanner';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex as="main" flex="1" direction="column">
      <HomeBanner />
      <TravelTypes />

      <Box w="30%" maxW={90} mx="auto">
        <Divider borderColor="dark.headings" />
      </Box>

      <Flex my="6" align="center" justify="center" textAlign="center">
        <Heading
          fontWeight="medium"
          fontSize={['xl', '4xl']}
          color="dark.headings"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
      </Flex>
    </Flex>
  );
}
