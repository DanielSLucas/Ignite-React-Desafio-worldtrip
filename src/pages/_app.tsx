import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';

import { theme } from '../styles/theme';

import '../styles/app.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Flex w="100vw" h="100vh" direction="column">
        <Header />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
