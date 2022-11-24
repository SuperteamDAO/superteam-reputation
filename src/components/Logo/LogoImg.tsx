import { Center } from '@chakra-ui/react';
import Image from 'next/image';

const LogoImg = () => {
  return (
    <Center w={{ base: '120px', md: '150px' }} h={{ base: '15px', md: '20px' }}>
      <Image src="/Logo.png" alt="superteam Logo" width={500} height={500} />
    </Center>
  );
};

export default LogoImg;
