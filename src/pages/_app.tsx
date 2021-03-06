import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';

import { theme } from '../styles/theme';

import '../styles/app.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        w="100vw"
        h="fit-content"
        minH="100vh"
        direction="column"
        overflowX="hidden"
      >
        <Header />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
