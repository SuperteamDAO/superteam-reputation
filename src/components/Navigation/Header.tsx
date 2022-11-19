import {
  chakra,
  Container,
  Icon,
  Stack,
  VisuallyHidden,
  Flex,
} from '@chakra-ui/react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import { ReactNode } from 'react';
import Logo from '../Logo';

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
      color="superteam_gray.600"
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={'_blank'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'color 0.3s ease'}
      _hover={{
        color: 'superteam_gray.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Header() {
  return (
    <Container
      maxW="full"
      bg="superteam_black.800"
      p="0.8rem"
      borderBottom={'1px solid '}
      borderColor={'superteam_black.200'}
    >
      <Flex
        flexDir={'row'}
        justify="space-between"
        align={'center'}
        mx="auto"
        w="100%"
        maxW="7xl"
      >
        <Logo />
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
          </IconButton>
        </Stack>
      </Flex>
    </Container>
  );
}
