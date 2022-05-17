import Image from 'next/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export function HomeBanner() {
  return (
    <Flex
      as="section"
      bgImg="/images/bannerBackground.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h={335}
      justify="center"
    >
      <Flex
        w="100%"
        maxW={1120}
        h="100%"
        p="4"
        align="center"
        justifyContent="space-between"
      >
        <Flex direction="column" justify="center">
          <Heading color="light.headings">
            5 Continentes,
            <br />
            infinitas possibilidades
          </Heading>
          <Text color="light.info.500" maxW={450}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Box
          mt="32"
          transform="rotate(3deg)"
          display={['none', 'none', 'inherit']}
        >
          <Image
            src="/images/airplane.svg"
            width={417.15}
            height={270.74}
            alt="Airplane"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
