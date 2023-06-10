import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import LogoImg from '../Logo/LogoImg';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="full"
      backgroundColor={useColorModeValue(
        'rgba(255, 255, 255, 0.08)',
        'superteamGreyDT.950'
      )}
      p="0.8rem"
      borderBottom={'1px solid '}
      borderColor={useColorModeValue(
        'superteamGreyLT.500',
        'superteamGreyDT.1100'
      )}
      boxShadow={useColorModeValue(
        '0px 2px 12px rgba(0, 0, 0, 0.04)',
        '0px 2px 12px rgba(0, 0, 0, 0.24)'
      )}
    >
      <Flex
        flexDir={'row'}
        justify="space-between"
        align={'center'}
        mx="auto"
        maxW="7xl"
      >
        <LogoImg />
        <Stack
          color={useColorModeValue(
            'superteamGreyDT.900',
            'superteamGreyLT.600'
          )}
          fontWeight={500}
          direction={'row'}
          spacing={[2, 6]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box display={{ md: "block", base: "none" }} fontSize="15px"><Link href={'/projects'} >Projects</Link></Box>
          <Box display={{ md: "block", base: "none" }}>
            <Button
              bg={useColorModeValue('superteamBlueLT.800', 'superteamOrange.800')}
              color={useColorModeValue('superteamWhite.100', 'black')}
              variant={'unstyled'}
              w="8rem"
              onClick={() => window.open("https://airtable.com/shrVdwTsjIimrEiUm")}
              fontSize="15px"
            >
              Claim XP
            </Button>
            {/* <MenuList
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
            </MenuList> */}
          </Box>
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
          {/* Mobile Menu */}
          <Box
            display={{ md: "none", base: "inline-block" }}
          >
            <Menu>
              <MenuButton>
                <BiMenu
                  color={useColorModeValue('superteamBlack.100', 'superteamWhite.100')}
                  fontSize={"30px"}
                />
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href='/projects'
                  bg="transparent"
                >Projects</MenuItem>
                <MenuItem as="a" href="https://airtable.com/shrVdwTsjIimrEiUm"
                  bg={useColorModeValue('superteamBlueLT.800', 'superteamOrange.800')}
                  color={useColorModeValue('superteamGreyLT.900', 'black')}
                >Claim XP</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Stack>
      </Flex>
    </Container >
  );
}
