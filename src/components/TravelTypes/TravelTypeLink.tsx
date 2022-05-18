import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';

interface TravelTypeLinkProps extends LinkProps {
  img: string;
  imgAlt: string;
  text: string;
}

export function TravelTypeLink({
  img,
  imgAlt,
  text,
  ...rest
}: TravelTypeLinkProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  if (isWideVersion) {
    return (
      <Link {...rest}>
        <Flex
          as="a"
          cursor="pointer"
          direction="column"
          align="center"
          p="4"
          m="4"
        >
          <Image src={img} width={85} height={85} alt={imgAlt} />

          <Text mt="6" color="dark.headings" fontWeight="semibold">
            {text}
          </Text>
        </Flex>
      </Link>
    );
  }

  return (
    <Link {...rest}>
      <Flex
        as="a"
        cursor="pointer"
        direction={['row', 'row', 'column']}
        align="center"
        justify="center"
        p="4"
      >
        <Box w="2" h="2" borderRadius="full" bg="highlight.500" />

        <Text ml="2" color="dark.headings" fontWeight="semibold">
          {text}
        </Text>
      </Flex>
    </Link>
  );
}
