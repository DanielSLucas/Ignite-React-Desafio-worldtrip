import { Flex, Text } from '@chakra-ui/react';
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
  return (
    <Link {...rest}>
      <Flex as="a" direction="column" align="center" p="4" m="4">
        <Image src={img} width={85} height={85} alt={imgAlt} />
        <Text mt="6" color="dark.headings" fontWeight="semibold">
          {text}
        </Text>
      </Flex>
    </Link>
  );
}
