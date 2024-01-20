import { Center, HStack, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';


const SocialMediaIcons = () => {
  const earnLogoURL = useColorModeValue('/earnLogoDark.png', '/earnLogo.png');
  const buildLogoURL = useColorModeValue('/buildLogoDark.png', '/buildLogo.png');
  const twitterLogoURL = useColorModeValue('/twitter.png', '/twitterDark.png');

  return (
    <Center>
      <HStack spacing="24px">
        <a href="https://earn.superteam.fun/">
          <Image src={earnLogoURL} alt="Earn" width={50} height={45} />
        </a>
        <a href="https://build.superteam.fun/">
          <Image src={buildLogoURL} alt="Build" width={65} height={55} />
        </a>
        <a href="https://twitter.com/superteamdao">
          <Image src={twitterLogoURL} alt="Twitter" width={24} height={24} />
        </a>
        <a href="https://www.youtube.com/@superteampodcast">
          <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
        </a>
        <a href="https://discord.com/invite/Mq3ReaekgG">
          <Image src="/discord.png" alt="Discord" width={28} height={28} />
        </a>
        <a href="https://superteam.substack.com/">
          <Image src="/substack.png" alt="Substack" width={28} height={28} />
        </a>
      </HStack>
    </Center>
  );
};

export default SocialMediaIcons;