import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { Flex } from '@chakra-ui/react';
import { Slide } from './Slide';

import 'swiper/css/bundle';

export function Slider() {
  return (
    <Flex w="100%" maxW={1120} h="100%" maxH={450}>
      <Swiper pagination navigation modules={[Pagination, Navigation]}>
        <SwiperSlide>
          <Slide
            title="Europa"
            description="O continente mais antigo"
            href="/continente/Europa"
            imgUrl="https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            title="América do Norte"
            description="O continente mais antigo"
            href="/continente/americaDoNorte"
            imgUrl="https://images.unsplash.com/photo-1581195177169-790ceff67d8a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            title="América do Sul"
            description="O continente mais antigo"
            href="/continente/americaDoSul"
            imgUrl="https://images.unsplash.com/photo-1619546952812-520e98064a52?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            title="Ásia"
            description="O continente mais antigo"
            href="/continente/asia"
            imgUrl="https://images.unsplash.com/photo-1503539680555-732099a55a56?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            title="África"
            description="O continente mais antigo"
            href="/continente/africa"
            imgUrl="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            title="Oceania"
            description="O continente mais antigo"
            href="/continente/oceania"
            imgUrl="https://images.unsplash.com/photo-1589330273594-fade1ee91647?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
          />
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
