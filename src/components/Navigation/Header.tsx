import {
  Button,
  chakra,
  Container,
  Flex,
  Icon,
  Stack,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import LogoImg from '../Logo/LogoImg';

const IconButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      w={8}
      h={8}
      color={useColorModeValue('superteamGreyDT.100', 'superteamGreyLT.600')}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={'_blank'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'color 0.3s ease'}
      _hover={{
        color: useColorModeValue('superteamGreyDT.500', 'superteamGreyLT.100'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

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
      borderColor={useColorModeValue('superteamGreyLT.500', 'superteamGreyDT.50')}
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
        <Stack direction={'row'} spacing={[2, 6]}>
          <IconButton
            label={'Discord'}
            href={'https://discord.com/invite/Mq3ReaekgG'}
          >
            <Icon as={FaDiscord} w={[5, 6]} h={[5, 6]} />
          </IconButton>
          <IconButton
            label={'Twitter'}
            href={'https://twitter.com/superteamdao'}
          >
            <Icon as={FaTwitter} w={[5, 6]} h={[5, 6]} />
          </IconButton>
          <IconButton
            label={'Substack'}
            href={'https://superteam.substack.com/p'}
          >
            <Icon as={SiSubstack} w={[4, 5]} h={[4, 5]} />
          </IconButton>{' '}
          <Button variant={'unstyled'} onClick={toggleColorMode}>
            {colorMode === 'light' ? (
              <Icon as={BsFillMoonFill} color={'superteamGreyDT.100'} w={[4, 5]} h={[4, 5]} />
            ) : (
              <Icon as={BsSunFill} color={'superteamGreyLT.600'} w={[4, 5]} h={[4, 5]} />
            )}
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}
