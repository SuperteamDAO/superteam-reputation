import {
  Box,
  Button,
  Container,
  css,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { dashboardDataType } from '../../interfaces/dashboardStore';
import { filteredData } from '../../util/filterData';
import EnhancedTable from './Leaderboard';

type propsType = {
  dashboardData: dashboardDataType[];
  searchResult: boolean;
  sortByLowToHigh: boolean;
  setSortByLowToHigh: React.Dispatch<React.SetStateAction<boolean>>;
};

const LeaderBoardWrapper = ({
  dashboardData,
  searchResult,
  sortByLowToHigh,
  setSortByLowToHigh,
}: propsType) => {
  const [searching, _setSearching] = React.useState(false);

  const {
    allXPData,
    filteredMembersData,
    filteredBountiesXPData,
    filteredIndieWorkXPData,
    filteredContributorsData,
    filteredProjectWorkXPData,
    filteredWorkingGroupXPData,
    filteredStackExchangeXPData,
    filteredInternalOperationsXPData,
  } = filteredData(
    dashboardData.sort((a, b) => {
      if (sortByLowToHigh) {
        return (
          a.overallXP.details.total_amount - b.overallXP.details.total_amount
        );
      } else {
        return (
          b.overallXP.details.total_amount - a.overallXP.details.total_amount
        );
      }
    })
  );

  return (
    <Container
      backgroundColor={useColorModeValue(
        'superteamWhite.100',
        'superteamGreyDT.1000'
      )}
      fontFamily={'Inter'}
      maxW="full"
      p="1rem"
    >
      <VStack maxW="7xl" mx="auto" align={'start'} justify="start" py="1rem">
        <Heading
          color={useColorModeValue(
            'superteamGreyLT.800',
            'superteamGreyLT.800'
          )}
          fontWeight={'600'}
          fontSize={'14px'}
          textTransform="uppercase"
        >
          Browse By
        </Heading>
        <Tabs
          w="full"
          borderBottom={'1px solid'}
          borderColor={useColorModeValue(
            'superteamGreyLT.500',
            'superteamGreyDT.50'
          )}
          onDrag={() => {
            //todo: add draggable tabs for mobile ( on right drag tab should change to the next right tab ) console.log('tab dragged');
            // to implement it find a function or hook that can be changed to change the index of current tab
          }}
        >
          <TabList
            gap="2rem"
            borderBottom={'1px solid '}
            borderColor={useColorModeValue(
              'superteamGreyLT.500',
              'superteamGreyDT.50'
            )}
            css={css({
              scrollbarWidth: 'none',
              '::-webkit-scrollbar': { display: 'none' },
              WebkitOverflowXScrolling: 'touch', // todo: here there is a bug remove the scrollbar in x direction
            })}
            overflowX="scroll"
            overflowY={'visible'}
            minH="3.5rem"
            h={'fit-content'}
          >
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              whiteSpace="nowrap"
              transform="translateY(2px)"
              transition="0.4s all"
              borderBottom={'3px solid'}
              borderColor={useColorModeValue(
                'superteamWhite.100',
                'superteamGreyDT.1000'
              )}
              color={useColorModeValue(
                'superteamGreyDT.100',
                'superteamGreyLT.800'
              )}
              _active={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                transition: '0.4s color',
              }}
              _selected={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                borderBottom: '3px solid',
                borderColor: useColorModeValue(
                  'superteamOrange.800',
                  'superteamBlueLT.800'
                ),
                transition: '0.4s all',
              }}
            >
              Everyone
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              whiteSpace="nowrap"
              transform="translateY(2px)"
              transition="0.4s all"
              borderBottom={'3px solid'}
              borderColor={useColorModeValue(
                'superteamWhite.100',
                'superteamGreyDT.1000'
              )}
              color={useColorModeValue(
                'superteamGreyDT.100',
                'superteamGreyLT.800'
              )}
              _active={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                transition: '0.4s color',
              }}
              _selected={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                borderBottom: '3px solid',
                borderColor: useColorModeValue(
                  'superteamOrange.800',
                  'superteamBlueLT.800'
                ),
                transition: '0.4s all',
              }}
            >
              Members
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              whiteSpace="nowrap"
              transform="translateY(2px)"
              transition="0.4s all"
              borderBottom={'3px solid'}
              borderColor={useColorModeValue(
                'superteamWhite.100',
                'superteamGreyDT.1000'
              )}
              color={useColorModeValue(
                'superteamGreyDT.100',
                'superteamGreyLT.800'
              )}
              _active={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                transition: '0.4s color',
              }}
              _selected={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                borderBottom: '3px solid',
                borderColor: useColorModeValue(
                  'superteamOrange.800',
                  'superteamBlueLT.800'
                ),
                transition: '0.4s all',
              }}
            >
              Contributors
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              whiteSpace="nowrap"
              transform="translateY(2px)"
              transition="0.4s all"
              borderBottom={'3px solid'}
              borderColor={useColorModeValue(
                'superteamWhite.100',
                'superteamGreyDT.1000'
              )}
              color={useColorModeValue(
                'superteamGreyDT.100',
                'superteamGreyLT.800'
              )}
              _active={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                transition: '0.4s color',
              }}
              _selected={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                borderBottom: '3px solid',
                borderColor: useColorModeValue(
                  'superteamOrange.800',
                  'superteamBlueLT.800'
                ),
                transition: '0.4s all',
              }}
            >
              Project Work
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              whiteSpace="nowrap"
              transform="translateY(2px)"
              transition="0.4s all"
              borderBottom={'3px solid'}
              borderColor={useColorModeValue(
                'superteamWhite.100',
                'superteamGreyDT.1000'
              )}
              color={useColorModeValue(
                'superteamGreyDT.100',
                'superteamGreyLT.800'
              )}
              _active={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                transition: '0.4s color',
              }}
              _selected={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                borderBottom: '3px solid',
                borderColor: useColorModeValue(
                  'superteamOrange.800',
                  'superteamBlueLT.800'
                ),
                transition: '0.4s all',
              }}
            >
              Indie Work
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              whiteSpace="nowrap"
              transform="translateY(2px)"
              transition="0.4s all"
              borderBottom={'3px solid'}
              borderColor={useColorModeValue(
                'superteamWhite.100',
                'superteamGreyDT.1000'
              )}
              color={useColorModeValue(
                'superteamGreyDT.100',
                'superteamGreyLT.800'
              )}
              _active={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                transition: '0.4s color',
              }}
              _selected={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                borderBottom: '3px solid',
                borderColor: useColorModeValue(
                  'superteamOrange.800',
                  'superteamBlueLT.800'
                ),
                transition: '0.4s all',
              }}
            >
              Internal Ops
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              whiteSpace="nowrap"
              transform="translateY(2px)"
              transition="0.4s all"
              borderBottom={'3px solid'}
              borderColor={useColorModeValue(
                'superteamWhite.100',
                'superteamGreyDT.1000'
              )}
              color={useColorModeValue(
                'superteamGreyDT.100',
                'superteamGreyLT.800'
              )}
              _active={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                transition: '0.4s color',
              }}
              _selected={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                borderBottom: '3px solid',
                borderColor: useColorModeValue(
                  'superteamOrange.800',
                  'superteamBlueLT.800'
                ),
                transition: '0.4s all',
              }}
            >
              Working Groups
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              whiteSpace="nowrap"
              transform="translateY(2px)"
              transition="0.4s all"
              borderBottom={'3px solid'}
              borderColor={useColorModeValue(
                'superteamWhite.100',
                'superteamGreyDT.1000'
              )}
              color={useColorModeValue(
                'superteamGreyDT.100',
                'superteamGreyLT.800'
              )}
              _active={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                transition: '0.4s color',
              }}
              _selected={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                fontWeight: '600',
                borderBottom: '3px solid',
                borderColor: useColorModeValue(
                  'superteamOrange.800',
                  'superteamBlueLT.800'
                ),
                transition: '0.4s all',
              }}
            >
              Stack Exchange
            </Tab>{' '}
            {/* <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              whiteSpace="nowrap"
              color={useColorModeValue(
                'superteamGreyDT.100',
                'superteamGreyLT.800'
              )}
              _active={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
              }}
              _selected={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamWhite.100'
                ),
                borderBottom: '2px solid',
                borderColor: useColorModeValue('superteamOrange.800', 'superteamBlueLT.800'),
              }}
            >
              Bounties
            </Tab> */}
            <Flex
              display={{ base: 'none', md: 'none', lg: 'flex' }}
              w="full"
              flexDir={'column'}
              justify="center"
              alignItems={'end'}
              borderRadius="4px"
              rounded={'4px'}
            >
              <Box
                borderRadius="4px"
                background={'transparent'}
                maxW="14rem"
                p="0"
                mr="0.1rem"
              >
                <Button
                  color={useColorModeValue(
                    'superteamBlack.100',
                    'superteamGreyLT.800'
                  )}
                  bg={'transparent'}
                  outline={'1px solid '}
                  outlineColor={useColorModeValue(
                    'superteamGreyLT.300',
                    'superteamGreyLT.800'
                  )}
                  _focus={{
                    bg: 'transparent',
                  }}
                  _hover={{
                    bg: 'transparent',
                  }}
                  h="2rem"
                  pb={'3px'}
                  rounded={'4px'}
                  fontWeight="500"
                  fontSize={'12px'}
                  onClick={() => {
                    setSortByLowToHigh((sortByLowToHigh) => !sortByLowToHigh);
                  }}
                >
                  Sort by |{' '}
                  {`${sortByLowToHigh ? 'XP Low to high' : 'XP High to low'}`}
                </Button>
              </Box>
            </Flex>
          </TabList>
          <Flex
            borderRadius="4px"
            rounded={'4px'}
            display={{ base: 'flex', md: 'flex', lg: 'none' }}
            w="full"
            flexDir={'column'}
            justify="center"
            alignItems={'end'}
          >
            {/* <InputGroup maxW="full" mt="1rem">
              <InputLeftElement w={'2.6rem'} h={'2rem'} pointerEvents="none">
                <Icon as={HiSearch} w={4} h={4} />
              </InputLeftElement>
              <Input
                color={'superteamWhite'}
                placeholder="Search User"
                outline={'1px solid '}
                outlineColor="superteamBlack.200"
                border={'none'}
                borderRadius="4px"
                rounded={'4px'}
                _placeholder={{
                  color: 'superteamBlack.800',
                  fontSize: '12px',
                }}
                h="2rem"
                pb={'3px'}
                value={wordEntered}
                onChange={handleSearch}
                _focus={{
                  border: '1px solid',
                  borderColor: 'superteamBlue.900',
                }}
              />
            </InputGroup> */}
          </Flex>
          <TabPanels p="0">
            <TabPanel p="0">
              <EnhancedTable
                row={allXPData}
                searching={searching}
                searchResult={searchResult}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredMembersData}
                searching={searching}
                searchResult={searchResult}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredContributorsData}
                searching={searching}
                searchResult={searchResult}
              />
            </TabPanel>{' '}
            <TabPanel p="0">
              <EnhancedTable
                row={filteredProjectWorkXPData}
                searching={searching}
                searchResult={searchResult}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredIndieWorkXPData}
                searching={searching}
                searchResult={searchResult}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredInternalOperationsXPData}
                searching={searching}
                searchResult={searchResult}
              />
            </TabPanel>{' '}
            <TabPanel p="0">
              <EnhancedTable
                row={filteredWorkingGroupXPData}
                searching={searching}
                searchResult={searchResult}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredStackExchangeXPData}
                searching={searching}
                searchResult={searchResult}
              />
            </TabPanel>
            {/* <TabPanel p="0">
              <EnhancedTable
                row={filteredBountiesXPData}
                searching={searching}
              />
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

export default LeaderBoardWrapper;
