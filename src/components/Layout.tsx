import { Container } from '@chakra-ui/react';
import React from 'react';
import Footer from './Navigation/Footer';
import Header from './Navigation/Header';

const Layout = ({ children }: any) => {
  return (
    <Container maxW="full" p="0rem">
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
