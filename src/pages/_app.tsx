import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import theme from '../../config/chakra.config';
import Layout from '../components/Layout';
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout inter={inter}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
