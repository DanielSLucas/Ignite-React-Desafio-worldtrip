import { Flex, Heading } from '@chakra-ui/react';

import { CityCard } from './CityCard';

export function CitiesSection() {
  return (
    <Flex as="section" w="100%" h="fit-content" justify="center">
      <Flex
        direction="column"
        w="100%"
        maxW={1120}
        h="100%"
        p="2"
        mt={[0, '8']}
      >
        <Heading
          as="h2"
          fontSize={['2xl', '4xl']}
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
          justify={['center', 'center', 'center', 'flex-start']}
        >
          <CityCard
            city="Londres"
            cityImgUrl="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
            country="Reino Unido"
            countryImgUrl="https://img.freepik.com/fotos-gratis/union-jack-flag-background_1048-6002.jpg?t=st=1653410012~exp=1653410612~hmac=9cff57dbf6fd6c04d6ef6e40d8ae70a2588b815d994f1f9358c7060629150b6e&w=1380"
          />
          <CityCard
            city="Londres"
            cityImgUrl="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
            country="Reino Unido"
            countryImgUrl="https://img.freepik.com/fotos-gratis/union-jack-flag-background_1048-6002.jpg?t=st=1653410012~exp=1653410612~hmac=9cff57dbf6fd6c04d6ef6e40d8ae70a2588b815d994f1f9358c7060629150b6e&w=1380"
          />
          <CityCard
            city="Londres"
            cityImgUrl="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
            country="Reino Unido"
            countryImgUrl="https://img.freepik.com/fotos-gratis/union-jack-flag-background_1048-6002.jpg?t=st=1653410012~exp=1653410612~hmac=9cff57dbf6fd6c04d6ef6e40d8ae70a2588b815d994f1f9358c7060629150b6e&w=1380"
          />
          <CityCard
            city="Londres"
            cityImgUrl="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
            country="Reino Unido"
            countryImgUrl="https://img.freepik.com/fotos-gratis/union-jack-flag-background_1048-6002.jpg?t=st=1653410012~exp=1653410612~hmac=9cff57dbf6fd6c04d6ef6e40d8ae70a2588b815d994f1f9358c7060629150b6e&w=1380"
          />
          <CityCard
            city="Londres"
            cityImgUrl="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
            country="Reino Unido"
            countryImgUrl="https://img.freepik.com/fotos-gratis/union-jack-flag-background_1048-6002.jpg?t=st=1653410012~exp=1653410612~hmac=9cff57dbf6fd6c04d6ef6e40d8ae70a2588b815d994f1f9358c7060629150b6e&w=1380"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
