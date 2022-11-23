import {
  Container,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
const DashboardHeader = () => {
  const router = useRouter();
  return (
    <Container maxW={'full'} bg="superteamBlack.800" p="1rem">
      <VStack
        py={{ base: '2rem', md: '', lg: '4.6rem' }}
        gap="0.6rem"
        maxW="7xl"
        mx="auto"
      >
        <Heading
          w="full"
          textAlign={'start'}
          fontSize={['17px', '18px', '18px']}
          fontWeight="600"
          color="superteamWhite"
        >
          ✨ The XP System
        </Heading>
        <Stack
          w="full"
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          gap={['2rem', '3rem', 'auto']}
        >
          <Text fontSize={['16px', '17px', '17px']} maxW="xl">
            XP system helps us understand who did what when and why this is just
            random text that you just wasted 20 seconds reading, get a life
          </Text>
          <HStack
            gap="1.2rem"
            width={['full', 'auto', 'auto', 'auto']}
            justify={'space-between'}
          >
            <Text
              as="a"
              href="https://superteam-onboarding.gitbook.io/the-superteam-handbook/community/the-reputation-system"
              target={'_blank'}
              fontWeight={'500'}
              cursor={'pointer'}
              borderBottom={'2px dashed'}
              fontSize={['16px', '17px', '18px']}
            >
              How to earn XP?
            </Text>
            <Menu>
              <MenuButton
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="0px"
                color="superteamWhite"
                display="flex"
                flexDir="row"
                backgroundColor="superteamBlue.900"
                padding={[
                  '0.9rem 2rem 0.8rem 2rem',
                  '1rem 2.2rem 0.9rem 2.2rem',
                ]}
                fontSize={['14px', '15px', '16px']}
                _hover={{ bg: 'superteamBlue.900' }}
                _expanded={{ bg: 'superteamBlue.900' }}
                _focus={{ boxShadow: 'outline' }}
              >
                Claim XP
              </MenuButton>
              <MenuList
                background="superteamGray.900"
                border={'1px solid'}
                borderColor="superteamBlack.200"
              >
                <MenuItem
                  as="a"
                  href="https://airtable.com/shrOqa7YLUB29Gq3n"
                  target="_blank"
                  background="superteamGray.900"
                  _hover={{ bg: 'superteamBlack.200', color: 'superteamWhite' }}
                  _focus={{ bg: 'superteamBlack.200', color: 'superteamWhite' }}
                >
                  Project Work
                </MenuItem>
                <MenuItem
                  as="a"
                  href=" https://airtable.com/shrxXBIaztqhDCG79"
                  target="_blank"
                  background="superteamGray.900"
                  _hover={{ bg: 'superteamBlack.200', color: 'superteamWhite' }}
                  _focus={{ bg: 'superteamBlack.200', color: 'superteamWhite' }}
                >
                  Indie Work
                </MenuItem>
                {/* <MenuItem
                  as="a"
                  href=" https://airtable.com/shrxXBIaztqhDCG79"
                  target="_blank"
                  background="superteamGray.900"
                  _hover={{ bg: 'superteamBlack.200', color: 'superteamWhite' }}
                  _focus={{ bg: 'superteamBlack.200', color: 'superteamWhite' }}
                >
                  Stack Exchange
                </MenuItem> */}
                <MenuDivider color="superteamBlack.200" />
                <MenuItem
                  as="a"
                  href="https://superteam.fun/bounties"
                  target="_blank"
                  background="superteamGray.900"
                  _hover={{ bg: 'superteamBlack.200', color: 'superteamWhite' }}
                  _focus={{ bg: 'superteamBlack.200', color: 'superteamWhite' }}
                >
                  Open Bounties
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Stack>
      </VStack>
    </Container>
  );
};

export default DashboardHeader;
