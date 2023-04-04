import {
  Box,
  Container,
  css,
  Flex,
  Heading,
  Select,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { dashboardDataType } from '../../interfaces/dashboardStore';
import { filteredData } from '../../util/filterData';
import sortingXpDataUtil, { SortByXp } from '../../util/sortingData';
import CustomTab from './CustomTab';
import EnhancedTable from './Leaderboard';
const scrollIntoView = require('scroll-into-view');

type propsType = {
  dashboardData: dashboardDataType[];
  searchResult: boolean;
  sortOrder: SortByXp;
  setSortOrder: React.Dispatch<React.SetStateAction<SortByXp>>;
};

const tabsList = [
  'Everyone',
  'Members',
  'Contributors',
  'Project Work',
  'Indie Work',
  'Internal Ops',
  'Working Groups',
  'Stack Exchange',
];

const LeaderBoardWrapper = ({
  dashboardData,
  searchResult,
  sortOrder,
  setSortOrder,
}: propsType) => {
  const [searching, _setSearching] = React.useState(false);
  const [activeTab, setActiveTab] = useState(0);
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
  } = filteredData(sortingXpDataUtil(dashboardData, sortOrder));

  useEffect(() => {
    const tabElement = document.getElementsByClassName(
      `tab-${tabsList[activeTab]}`
    );
    scrollIntoView(tabElement[0]);
  }, [activeTab]);

  const handlers = useSwipeable({
    onSwipedRight: () => setActiveTab((prev) => (prev > 0 ? prev - 1 : prev)),
    onSwipedLeft: () => setActiveTab((prev) => (prev < 7 ? prev + 1 : prev)),
  });

  return (
    <Container
      backgroundColor={useColorModeValue(
        'superteamSurfacePrimaryLM.100',
        'superteamSurfacePrimaryDM'
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
          index={activeTab}
          onChange={(index) => setActiveTab(index)}
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
            {tabsList.map((tabName, index) => (
              <CustomTab key={index} title={tabName} />
            ))}

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
                  'superteamSurfacePrimaryLM.100'
                ),
              }}
              _selected={{
                color: useColorModeValue(
                  'superteamBlack.100',
                  'superteamSurfacePrimaryLM.100'
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
                <Select
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
                  value={sortOrder}
                  onChange={(e) => {
                    setSortOrder(e.target.value as SortByXp);
                  }}
                >
                  {Object.values(SortByXp).map((sortByXp) => (
                    <option key={sortByXp} value={sortByXp}>
                      Sort by | {sortByXp}
                    </option>
                  ))}
                </Select>
              </Box>
            </Flex>
          </TabList>
          <Flex
            display={{ base: 'flex', md: 'flex', lg: 'none' }}
            w="full"
            flexDir={'column'}
            justify="center"
            alignItems={'flex-start'}
            mt="8"
          >
            <Box
              borderRadius="4px"
              background={'transparent'}
              maxW="14rem"
              p="0"
              mr="0.1rem"
            >
              <Select
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
                h="2.5rem"
                pb={'3px'}
                rounded={'4px'}
                fontWeight="500"
                fontSize={'12px'}
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value as SortByXp);
                }}
              >
                {Object.values(SortByXp).map((sortByXp) => (
                  <option key={sortByXp} value={sortByXp}>
                    Sort by | {sortByXp}
                  </option>
                ))}
              </Select>
            </Box>
          </Flex>
          <TabPanels {...handlers} p="0">
            <TabPanel p="0">
              <EnhancedTable
                row={allXPData}
                sortOrder={sortOrder}
                searchResult={searchResult}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredMembersData}
                sortOrder={sortOrder}
                searchResult={searchResult}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredContributorsData}
                sortOrder={sortOrder}
                searchResult={searchResult}
              />
            </TabPanel>{' '}
            <TabPanel p="0">
              <EnhancedTable
                row={filteredProjectWorkXPData}
                sortOrder={sortOrder}
                searchResult={searchResult}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredIndieWorkXPData}
                sortOrder={sortOrder}
                searchResult={searchResult}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredInternalOperationsXPData}
                sortOrder={sortOrder}
                searchResult={searchResult}
              />
            </TabPanel>{' '}
            <TabPanel p="0">
              <EnhancedTable
                row={filteredWorkingGroupXPData}
                sortOrder={sortOrder}
                searchResult={searchResult}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredStackExchangeXPData}
                sortOrder={sortOrder}
                searchResult={searchResult}
              />
            </TabPanel>
            {/* <TabPanel p="0">
              <EnhancedTable
                row={filteredBountiesXPData}
                sortOrder={sortOrder}
              />
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

export default LeaderBoardWrapper;
