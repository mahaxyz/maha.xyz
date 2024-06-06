import { extendTheme } from '@chakra-ui/react';
import { Kode_Mono } from 'next/font/google';

const nextFont = Kode_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const theme = extendTheme({
  fonts: {
    body: nextFont.style.fontFamily,
    heading: nextFont.style.fontFamily,

  },
});


export default theme;
