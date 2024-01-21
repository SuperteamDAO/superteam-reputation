import { Center, HStack, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';


const SocialMediaIcons = () => {
  const earnLogoURL = useColorModeValue('/earnLogoDark.png', '/earnLogo.png');
  const buildLogoURL = useColorModeValue('/buildLogoDark.png', '/buildLogo.png');
  const twitterLogoURL = useColorModeValue('/twitter.png', '/twitterDark.png');
  const substackLogoURL = useColorModeValue('/substackDark.png', '/substack.png');
  const discordLogoURL = useColorModeValue('/discordDark.png', '/discord.png');
  const youtubeLogoURL = useColorModeValue('/youtubeDark.png', '/youtube.png');

  return (
    <Center>
      <HStack spacing="24px">
        <a href="https://twitter.com/superteamdao">
          <Image src={twitterLogoURL} alt="Twitter" width={24} height={24} />
        </a>
        <a href="https://www.youtube.com/@superteampodcast">
          <Image src={youtubeLogoURL} alt="YouTube" width={24} height={24} />
        </a>
        <a href="https://discord.com/invite/Mq3ReaekgG">
          <Image src={discordLogoURL} alt="Discord" width={28} height={28} />
        </a>
        <a href="https://superteam.substack.com/">
          <Image src={substackLogoURL} alt="Substack" width={17} height={17} />
        </a>
      </HStack>
    </Center>
  );
};

export default SocialMediaIcons;
