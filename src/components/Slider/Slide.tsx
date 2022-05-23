import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface SlideProps {
  title: string;
  description: string;
  imgUrl: string;
  href: string;
}

export function Slide({ title, description, imgUrl, href }: SlideProps) {
  return (
    <Box bgImg={imgUrl} bgRepeat="no-repeat" bgSize="cover" bgPos="center">
      <Flex
        h={450}
        direction="column"
        align="center"
        justify="center"
        bgColor="rgba(28, 20, 1, 0.35)"
      >
        <Link href={href}>
          <Flex
            as="a"
            cursor="pointer"
            direction="column"
            align="center"
            justify="center"
          >
            <Heading
              fontWeight="bold"
              fontSize={['2xl', '5xl']}
              color="light.headings"
            >
              {title}
            </Heading>
            <Text
              fontWeight="bold"
              fontSize={['sm', '2xl']}
              color="light.info.500"
            >
              {description}
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
}
