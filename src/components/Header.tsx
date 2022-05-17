import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export function Header() {
  const { asPath, back } = useRouter();

  return (
    <Flex w="100%" h="24" justify="center">
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

        <Image
          src="/logo.svg"
          width={184.06}
          height={45.92}
          alt="Worldtrip Logo"
        />

        <div />
      </Flex>
    </Flex>
  );
}
