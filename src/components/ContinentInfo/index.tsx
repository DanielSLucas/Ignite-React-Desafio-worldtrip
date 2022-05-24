import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, Tooltip } from '@chakra-ui/react';

export function ContinentInfo() {
  return (
    <Flex as="section" w="100%" h="fit-content" justify="center">
      <Flex
        w="100%"
        maxW={1120}
        h="100%"
        p="2"
        mt={[0, '8']}
        align="center"
        direction={['column', 'column', 'column', 'row']}
      >
        <Box p="2" w="100%" mr={[0, 0, 0, '16']}>
          <Text textAlign="justify" fontSize={['sm', '2xl']}>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>

        <Flex p="2" justifyContent="space-between" w="100%">
          <Flex direction="column" align="flex-start">
            <Text
              as="strong"
              fontSize={['2xl', '5xl']}
              color="highlight.500"
              fontWeight="semibold"
            >
              50
            </Text>
            <Text fontSize={['lg', '2xl']}>países</Text>
          </Flex>

          <Flex direction="column" align="flex-start">
            <Text
              as="strong"
              textAlign="left"
              fontSize={['2xl', '5xl']}
              color="highlight.500"
              fontWeight="semibold"
            >
              60
            </Text>
            <Text fontSize={['lg', '2xl']}>línguas</Text>
          </Flex>

          <Flex direction="column" align="flex-start">
            <Text
              as="strong"
              textAlign="left"
              fontSize={['2xl', '5xl']}
              color="highlight.500"
              fontWeight="semibold"
            >
              24
            </Text>
            <Text fontSize={['lg', '2xl']} display="flex" alignItems="center">
              cidades +100
              <Tooltip label="algum texto aqui =)" h="100%">
                <InfoOutlineIcon color="dark.info.100" h="40%" />
              </Tooltip>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
