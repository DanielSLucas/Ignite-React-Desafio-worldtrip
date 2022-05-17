import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: {
      '100': '#ffb90880',
      '500': '#FFBA08',
    },
    dark: {
      headings: '#47585B',
      text: '#47585B',
      info: {
        '100': '#99999980',
        '500': '#999999',
      },
    },
    light: {
      headings: '#F5F8FA',
      text: '#F5F8FA',
      info: {
        '100': '#dadada80',
        '500': '#DADADA',
      },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: '#47585B',
      },
    },
  },
});
