import { Center, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const LogoImg = () => {
  const logoURL = useColorModeValue('/LogoDark.png', '/Logo.png');
  const router = useRouter();
  return (
    <Center
      as="button"
      onClick={() => router.push('/')}
      w={{ base: '120px', md: '150px' }}
      h={{ base: '15px', md: '20px' }}
    >
      <Image src={logoURL} alt="superteam Logo" width={500} height={500} />
    </Center>
  );
};

export default LogoImg;
