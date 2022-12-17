import {
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import LogoImg from '../Logo/LogoImg';

const footerLinks = [
  {
    name: 'Earn',
    href: '#',
  },
  {
    name: 'Build',
    href: '#',
  },
  {
    name: 'Twitter',
    href: '#',
  },
  {
    name: 'Discord',
    href: '#',
  },
  {
    name: 'Substack',
    href: '#',
  },
  {
    name: 'Youtube',
    href: '#',
  },
];
const Footer = () => {
  return (
    <Container
      maxW="full"
      p="0.8rem"
      backgroundColor={useColorModeValue(
        'superteamWhite.100',
        'superteamGreyDT.1000'
      )}
      pb="4rem"
    >
      <Flex
        flexDir={'row'}
        justify="space-between"
        align={'center'}
        mx="auto"
        w="100%"
        maxW="7xl"
      >
        <LogoImg />
        <Stack
          color={useColorModeValue(
            'superteamGreyDT.100',
            'superteamGreyLT.600'
          )}
          direction={'row'}
          spacing={[2, 6]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {footerLinks.map((link, key) => {
            return (
              <Link passHref key={key} href={link.href}>
                <Text
                  fontWeight={500}
                  _hover={{
                    fontWeight: 600,
                  }}
                >
                  {link.name}
                </Text>
              </Link>
            );
          })}
        </Stack>
      </Flex>
    </Container>
  );
};

export default Footer;
