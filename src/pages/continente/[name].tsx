import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text, Tooltip } from '@chakra-ui/react';
import Image from 'next/image';

export default function Continente() {
  return (
    <Flex
      as="main"
      h="fit-content"
      w="100%"
      direction="column"
      overflowX="hidden"
    >
      {/* Banner */}
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
        <Heading
          as="h1"
          color="light.headings"
          fontSize={['1.75rem']}
          fontWeight="semibold"
        >
          Europa
        </Heading>
      </Flex>

      {/* Intro */}
      <Flex as="section" w="100%" h="fit-content" justify="center">
        <Flex
          flexWrap="wrap"
          w="100%"
          maxW={1120}
          h="100%"
          p={['2', '6']}
          mt={[0, '8']}
          align="center"
        >
          <Box p="2" w="100%">
            <Text textAlign="justify" fontSize={['sm']}>
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>

          <Flex p="2" justifyContent="space-between" w="100%">
            <Flex direction="column" align="flex-start">
              <Text
                as="strong"
                fontSize={['2xl']}
                color="highlight.500"
                fontWeight="semibold"
              >
                50
              </Text>
              <Text fontSize={['lg']}>países</Text>
            </Flex>

            <Flex direction="column" align="flex-start">
              <Text
                as="strong"
                textAlign="left"
                fontSize={['2xl']}
                color="highlight.500"
                fontWeight="semibold"
              >
                60
              </Text>
              <Text fontSize={['lg']}>línguas</Text>
            </Flex>

            <Flex direction="column" align="flex-start">
              <Text
                as="strong"
                textAlign="left"
                fontSize={['2xl']}
                color="highlight.500"
                fontWeight="semibold"
              >
                24
              </Text>
              <Text fontSize={['lg']} display="flex" alignItems="center">
                cidades +100
                <Tooltip label="algum texto aqui =)" h="100%">
                  <InfoOutlineIcon color="dark.info.100" h="50%" />
                </Tooltip>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* Content */}
      <Flex as="section" w="100%" h="fit-content" justify="center">
        <Flex
          direction="column"
          w="100%"
          maxW={1120}
          h="100%"
          p={['2', '6']}
          mt={[0, '8']}
        >
          <Heading
            as="h2"
            fontSize={['2xl']}
            fontWeight="medium"
            color="dark.headings"
            mb="6"
          >
            Cidades +100
          </Heading>
          <Flex
            w="100%"
            h="fit-content"
            flexWrap="wrap"
            align="center"
            justify="center"
          >
            <Flex
              direction="column"
              bg="white"
              borderWidth={1}
              borderStyle="solid"
              borderColor="highlight.100"
              borderRadius="md"
              w={[256]}
              h={[279]}
            >
              <Box position="relative" h={[173]}>
                <Image
                  src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
                  alt="London"
                  layout="fill"
                />
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
                    Londres
                  </Heading>
                  <Text>Reino Unido</Text>
                </Flex>
                <Box h={30} w={30} borderRadius="full" bg="blue">
                  {/* <Image /> */}
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
