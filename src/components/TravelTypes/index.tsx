import { Flex } from '@chakra-ui/react';
import { TravelTypeLink } from './TravelTypeLink';

export function TravelTypes() {
  return (
    <Flex as="section" w="100%" h="fit-content" justify="center">
      <Flex
        flexWrap="wrap"
        w="100%"
        maxW={1120}
        h="100%"
        p={['4', '8']}
        align="center"
        justifyContent="space-evenly"
      >
        <TravelTypeLink
          img="/icons/cocktail.svg"
          imgAlt="Cocktail"
          text="vida noturna"
          href="#"
        />

        <TravelTypeLink
          img="/icons/surf.svg"
          imgAlt="Surf"
          text="praia"
          href="#"
        />

        <TravelTypeLink
          img="/icons/building.svg"
          imgAlt="Building"
          text="moderno"
          href="#"
        />

        <TravelTypeLink
          img="/icons/museum.svg"
          imgAlt="Museum"
          text="clássico"
          href="#"
        />

        <TravelTypeLink
          img="/icons/earth.svg"
          imgAlt="Earth"
          text="e mais..."
          href="#"
        />
      </Flex>
    </Flex>
  );
}
