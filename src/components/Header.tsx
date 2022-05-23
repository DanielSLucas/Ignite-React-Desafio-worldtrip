import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import logoImg from '../../public/logo.svg';

export function Header() {
  const { asPath, back } = useRouter();

  return (
    <Flex as="header" w="100%" h={['12', '20']} justify="center">
      <Flex
        w="100%"
        maxW={1120}
        h="100%"
        align="center"
        justify="space-between"
      >
        {asPath !== '/' ? (
          <IconButton
            variant="link"
            icon={<ChevronLeftIcon w="8" h="8" />}
            aria-label="Voltar"
            onClick={back}
          />
        ) : (
          <div />
        )}

        <Flex position="relative" w={[135, 185]} h="100%" align="center">
          <Image src={logoImg} alt="Worldtrip Logo" />
        </Flex>

        <div />
      </Flex>
    </Flex>
  );
}
