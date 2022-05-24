import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface CityCardProps {
  city: string;
  cityImgUrl: string;
  country: string;
  countryImgUrl: string;
}

export function CityCard({
  city,
  cityImgUrl,
  country,
  countryImgUrl,
}: CityCardProps) {
  return (
    <Flex
      direction="column"
      bg="white"
      borderWidth={1}
      borderStyle="solid"
      borderColor="highlight.100"
      borderRadius="md"
      w={[256]}
      h={[279]}
      mx={[0, '2']}
      my="4"
    >
      <Box
        position="relative"
        h={[173]}
        overflow="hidden"
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
      >
        <Image src={cityImgUrl} alt="London" layout="fill" />
      </Box>
      <Flex align="center" justify="space-between" p="6">
        <Flex direction="column" alignItems="flex-start">
          <Heading
            fontFamily="Barlow"
            fontSize="xl"
            fontWeight="semibold"
            color="dark.headings"
            as="h3"
            mb="2"
          >
            {city}
          </Heading>
          <Text fontSize="md">{country}</Text>
        </Flex>
        <Box
          h={30}
          w={30}
          borderRadius="full"
          position="relative"
          overflow="hidden"
        >
          <Image src={countryImgUrl} alt="UK" layout="fill" />
        </Box>
      </Flex>
    </Flex>
  );
}
