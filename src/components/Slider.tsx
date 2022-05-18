import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css/bundle';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export function Slider() {
  return (
    <Flex w="100%" maxW={1120} h="100%" maxH={450}>
      <Swiper
        pagination
        navigation
        modules={[Pagination, Navigation]}
        style={{ overflow: 'hidden' }}
      >
        <SwiperSlide>
          <Box
            bgImg="https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Flex
              flex="1"
              h={450}
              direction="column"
              align="center"
              justify="center"
              bgColor="rgba(28, 20, 1, 0.35)"
            >
              <Heading
                fontWeight="bold"
                fontSize={['2xl', '5xl']}
                color="light.headings"
              >
                Europa
              </Heading>
              <Text
                fontWeight="bold"
                fontSize={['sm', '2xl']}
                color="light.info.500"
              >
                O continente mais antigo
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            flex="1"
            h={450}
            direction="column"
            align="center"
            justify="center"
            bgImg="https://images.unsplash.com/photo-1581195177169-790ceff67d8a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Heading>América do Norte</Heading>
            <Text>O continente mais antigo</Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}

// Europa
// https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470
// América do Norte
// https://images.unsplash.com/photo-1581195177169-790ceff67d8a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470
// América do Sul
// https://images.unsplash.com/photo-1619546952812-520e98064a52?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471
// Ásia
// https://images.unsplash.com/photo-1503539680555-732099a55a56?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470
// África
// https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632
// Oceania
// https://images.unsplash.com/photo-1589330273594-fade1ee91647?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470
