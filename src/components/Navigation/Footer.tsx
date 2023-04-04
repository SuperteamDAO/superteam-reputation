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
    href: 'https://earn.superteam.fun/',
  },
  {
    name: 'Build',
    href: 'https://build.superteam.fun/',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/superteamdao',
  },
  {
    name: 'Discord',
    href: 'https://discord.com/invite/Mq3ReaekgG',
  },
  {
    name: 'Substack',
    href: 'https://superteam.substack.com/',
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/@superteampodcast',
  },
];
const Footer = () => {
  return (
    <Container
      maxW="full"
      p="0.8rem"
      backgroundColor={useColorModeValue(
        'superteamSurfacePrimaryLM.100',
        'superteamSurfacePrimaryDM'
      )}
      pb="4rem"
    >
      <Flex
        flexDir={'row'}
        justify="space-between"
        align={{ md: 'center', base: 'flex-start' }}
        mx="auto"
        w="100%"
        px={4}
        maxW="7xl"
      >
        <LogoImg />
        <Stack
          color={useColorModeValue(
            'superteamGreyDT.100',
            'superteamGreyLT.600'
          )}
          direction={{ md: 'row', base: 'column' }}
          spacing={[2, 6]}
          display="flex"
          justifyContent="center"
        >
          {footerLinks.map((link, key) => {
            return (
              <Link passHref key={key} target="_blank" href={link.href}>
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
