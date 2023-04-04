import { Container } from '@chakra-ui/react';
import Footer from './Navigation/Footer';
import Header from './Navigation/Header';

const Layout = ({ children, inter }: any) => {
  return (
    <Container maxW="full" p="0rem" className={inter.className}>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
