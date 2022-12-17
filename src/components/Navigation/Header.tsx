import {
  Button,
  Container,
  Flex,
  Icon,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import LogoImg from '../Logo/LogoImg';

const NavbarLinks = [
  {
    name: 'Reputation System',
    href: '#',
  },
  {
    name: 'Projects',
    href: '#',
  },
  {
    name: 'Bounties',
    href: '#',
  },
  {
    name: 'GDP',
    href: '#',
  },
];

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="full"
      backgroundColor={useColorModeValue(
        'superteamGreyLT.50',
        'superteamGreyDT.900'
      )}
      p="0.8rem"
      borderBottom={'1px solid '}
      borderColor={useColorModeValue(
        'superteamGreyLT.500',
        'superteamGreyDT.50'
      )}
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
          {NavbarLinks.map((link, key) => {
            return (
              <Link passHref key={key} href={link.href}>
                <Text>{link.name}</Text>
              </Link>
            );
          })}
          <Button
            bg={useColorModeValue('superteamBlueLT.800', 'superteamOrange.800')}
            color="white"
            variant={'unstyled'}
            w="8rem"
          >
            Submit XP
          </Button>
          <Button variant={'unstyled'} onClick={toggleColorMode}>
            {colorMode === 'light' ? (
              <Icon
                as={BsFillMoonFill}
                color={'superteamGreyDT.100'}
                w={[4, 5]}
                h={[4, 5]}
              />
            ) : (
              <Icon
                as={BsSunFill}
                color={'superteamGreyLT.600'}
                w={[4, 5]}
                h={[4, 5]}
              />
            )}
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}
