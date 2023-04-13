import {
  Button,
  Container,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import LogoImg from '../Logo/LogoImg';

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
          <Link href={'/projects'}>Projects</Link>
          <Link href={'/bounties'}>Bounties</Link>
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
          <Menu>
            <MenuButton
              as={Button}
              bg={useColorModeValue(
                'superteamBlueLT.800',
                'superteamOrange.800'
              )}
              color="white"
              variant={'unstyled'}
              w="8rem"
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
                    'superteamSurfacePrimaryLM.100'
                  ),
                }}
                _focus={{
                  bg: useColorModeValue(
                    'superteamGreyLT.100',
                    'superteamGreyDT.50'
                  ),
                  color: useColorModeValue(
                    'superteamBlack.100',
                    'superteamSurfacePrimaryLM.100'
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
                    'superteamSurfacePrimaryLM.100'
                  ),
                }}
                _focus={{
                  bg: useColorModeValue(
                    'superteamGreyLT.100',
                    'superteamGreyDT.50'
                  ),
                  color: useColorModeValue(
                    'superteamBlack.100',
                    'superteamSurfacePrimaryLM.100'
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
                    'superteamSurfacePrimaryLM.100'
                  ),
                }}
                _focus={{
                  bg: useColorModeValue(
                    'superteamGreyLT.100',
                    'superteamGreyDT.50'
                  ),
                  color: useColorModeValue(
                    'superteamBlack.100',
                    'superteamSurfacePrimaryLM.100'
                  ),
                }}
              >
                Open Bounties
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>
    </Container>
  );
}
