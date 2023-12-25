import {
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import LogoImg from '../Logo/LogoImg';
import SocialMediaIcons from '../Logo/Socialimg';

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
          < SocialMediaIcons />
          
        </Stack>
      </Flex>
    </Container>
  );
};

export default Footer;
