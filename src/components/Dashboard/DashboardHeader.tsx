import {
  Box,
  Center,
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
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
const DashboardHeader = () => {
  const router = useRouter();
  return (
    <Container
      fontFamily={'Inter'}
      maxW={'full'}
      backgroundColor={useColorModeValue(
        'superteamGreyLT.50',
        'superteamGreyDT.900'
      )}
      p="1rem"
    >
      <VStack
        py={{ base: '2rem', md: '', lg: '4.6rem' }}
        gap="0.6rem"
        maxW="7xl"
        mx="auto"
      >
        <Heading
          w="full"
          textAlign={'start'}
          fontSize={['17px', '18px', '20px']}
          fontWeight="800"
          color={useColorModeValue('superteamBlack.100', 'superteamWhite.100')}
          display="flex"
          gap="0.5rem"
        >
          <Center w={'fit-content'}>
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2338 2.60975H20.5799V4.40657C20.5799 6.8435 18.7402 8.81313 16.464 8.81313H16.2338V2.60975ZM10.0487 0H16.2338V16.9618H15.4978C11.0143 16.9618 10.1174 13.614 10.1174 10.6349L10.0487 0ZM0 3.8407C0 6.86846 2.02326 7.97649 4.27669 8.34584H0V17.0111H4.11586C8.25502 17.0111 8.73752 15.0415 8.73752 13.1704C8.73752 10.8807 7.26612 9.28106 4.98937 8.66527H8.73752V0H4.62167C0.483087 0 0 1.96964 0 3.8407Z"
                fill="#F6A50B"
              />
            </svg>
          </Center>
          <Box as="span">Superteam</Box>{' '}
          <Box as="span" fontWeight={'200'}>
            /
          </Box>{' '}
          <Box as="span">Reputation Dashboard</Box>
        </Heading>
        <Stack
          w="full"
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          gap={['2rem', '3rem', 'auto']}
        >
          <Text
            color={useColorModeValue(
              'superteamGreyDT.400',
              'superteamGreyLT.300'
            )}
            fontSize={['16px', '17px', '17px']}
            maxW="xl"
          >
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
              color={useColorModeValue(
                'superteamGreyDT.400',
                'superteamGreyLT.300'
              )}
            >
              How to earn XP?
            </Text>
            <Menu>
              <MenuButton
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="0px"
                color="white"
                display="flex"
                flexDir="row"
                backgroundColor={useColorModeValue(
                  'superteamOrange.800',
                  'superteamBlueLT.800'
                )}
                padding={[
                  '0.7rem 1.6rem 0.6rem 1.6rem',
                  '1rem 2.2rem 0.9rem 2.2rem',
                ]}
                fontSize={['14px', '15px', '16px']}
                _hover={{
                  bg: useColorModeValue(
                    'superteamBlue.800',
                    'superteamBlue.900'
                  ),
                }}
                _expanded={{
                  bg: useColorModeValue(
                    'superteamBlue.800',
                    'superteamBlue.900'
                  ),
                }}
                _focus={{ boxShadow: 'outline' }}
              >
                Claim XP
              </MenuButton>
              <MenuList
                backgroundColor={useColorModeValue(
                  'superteamGrayLT.200',
                  'superteamGreyDT.900'
                )}
                border={'1px solid'}
                borderColor={useColorModeValue(
                  'superteamGreyLT.500',
                  'superteamGreyDT.50'
                )}
              >
                <MenuItem
                  as="a"
                  href="https://airtable.com/shrOqa7YLUB29Gq3n"
                  target="_blank"
                  fontSize={{ base: 'sm', md: 'md' }}
                  backgroundColor={useColorModeValue(
                    'superteamGrayLT.200',
                    'superteamGreyDT.900'
                  )}
                  _hover={{
                    bg: useColorModeValue(
                      'superteamGreyLT.100',
                      'superteamGreyDT.50'
                    ),
                    color: useColorModeValue(
                      'superteamBlack.100',
                      'superteamWhite.100'
                    ),
                  }}
                  _focus={{
                    bg: useColorModeValue(
                      'superteamGreyLT.100',
                      'superteamGreyDT.50'
                    ),
                    color: useColorModeValue(
                      'superteamBlack.100',
                      'superteamWhite.100'
                    ),
                  }}
                >
                  Project Work
                </MenuItem>
                <MenuItem
                  as="a"
                  href=" https://airtable.com/shrxXBIaztqhDCG79"
                  target="_blank"
                  fontSize={{ base: 'sm', md: 'md' }}
                  backgroundColor={useColorModeValue(
                    'superteamGrayLT.200',
                    'superteamGreyDT.900'
                  )}
                  _hover={{
                    bg: useColorModeValue(
                     'superteamGreyLT.100',
                      'superteamGreyDT.50'
                    ),
                    color: useColorModeValue(
                      'superteamBlack.100',
                      'superteamWhite.100'
                    ),
                  }}
                  _focus={{
                    bg: useColorModeValue(
                     'superteamGreyLT.100',
                      'superteamGreyDT.50'
                    ),
                    color: useColorModeValue(
                      'superteamBlack.100',
                      'superteamWhite.100'
                    ),
                  }}
                >
                  Indie Work
                </MenuItem>
                {/* <MenuItem
                  as="a"
                  href=" https://airtable.com/shrxXBIaztqhDCG79"
                  target="_blank"    fontSize={{base:'sm', md:'md'}}
                  background={useColorModeValue("superteamGray.900","")}
                  _hover={{ bg: useColorModeValue('superteamBlack.200',''), color: useColorModeValue('superteamWhite','') }}
                  _focus={{ bg: useColorModeValue('superteamBlack.200',''), color: useColorModeValue('superteamWhite','') }}
                >
                  Stack Exchange
                </MenuItem> */}
                <MenuDivider
                  color={useColorModeValue('superteamBlack.200', '')}
                />
                <MenuItem
                  as="a"
                  href="https://superteam.fun/bounties"
                  target="_blank"
                  fontSize={{ base: 'sm', md: 'md' }}
                  backgroundColor={useColorModeValue(
                    'superteamGrayLT.200',
                    'superteamGreyDT.900'
                  )}
                  _hover={{
                    bg: useColorModeValue(
                     'superteamGreyLT.100',
                      'superteamGreyDT.50'
                    ),
                    color: useColorModeValue(
                      'superteamBlack.100',
                      'superteamWhite.100'
                    ),
                  }}
                  _focus={{
                    bg: useColorModeValue(
                     'superteamGreyLT.100',
                      'superteamGreyDT.50'
                    ),
                    color: useColorModeValue(
                      'superteamBlack.100',
                      'superteamWhite.100'
                    ),
                  }}
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
