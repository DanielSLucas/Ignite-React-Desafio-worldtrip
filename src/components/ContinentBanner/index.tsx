import { Flex, Heading } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex
      as="section"
      bgImg="https://images.unsplash.com/photo-1503780099440-e6ab046a1d71?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1883"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="right"
      w="100%"
      h={[150, 500]}
      justify="center"
      align="center"
    >
      <Flex
        h="100%"
        w="100%"
        maxWidth={1120}
        p="2"
        justify={['center', 'center', 'center', 'flex-start']}
        align={['center', 'center', 'center', 'flex-end']}
      >
        <Heading
          as="h1"
          color="light.headings"
          fontSize={['1.75rem', '5xl']}
          fontWeight="semibold"
          mb={['0', '10']}
        >
          Europa
        </Heading>
      </Flex>
    </Flex>
  );
}
