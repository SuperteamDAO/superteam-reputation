import {
  Box,
  Center,
  Container, Flex, Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  Stack, Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiFilterAlt, BiSearchAlt2 } from 'react-icons/bi';
import { dashboardDataType } from '../../interfaces/dashboardStore';
import { filteredData } from '../../util/filterData';
import sortingXpDataUtil, { SortByXp } from '../../util/sortingData';
import { filterList, sortingFinalXPDataUtil } from '../../util/sortingXPData';
import { filterRegionList, filterSkillsList, sortingFinalXPDataFilterUtil } from '../../util/sortingXPDataFilters';
import EnhancedTable from './Leaderboard';
import { xpType } from './Row/interfaces/xp';

type propsType = {
  dashboardData: dashboardDataType[];
  searchResult: boolean;
  sortOrder: SortByXp;
  setSortOrder: React.Dispatch<React.SetStateAction<SortByXp>>;
};

const LeaderBoardWrapper = ({
  dashboardData,
  searchResult,
  sortOrder,
  setSortOrder,
}: propsType) => {
  const {
    allXPData,
    region_data,
    monthly_xp_data
  } = filteredData(sortingXpDataUtil(dashboardData, sortOrder));

  const [skillXPData, setSkillXPData] = useState<(xpType | undefined)[]>(allXPData);
  const [countryRegionFilteredData, setCountryRegionFilteredData] = useState<(xpType | undefined)[]>(allXPData);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [regionXPIndex, setRegionXPIndex] = useState(-1);
  const [skillsXPIndex, setSkillsXPIndex] = useState(-1);
  const [switchPageToOne, setSwitchPageToOne] = useState(false);
  let countryRegionFilteredDataVar: (xpType | undefined)[] = countryRegionFilteredData;

  const filterXP = (regionIndex: number, skillsIndex: number, latestSearchQuery?: string) => {
    let selectedRegion = (regionIndex === -1) ? "" : filterRegionList[regionIndex];
    let selectedSkill = (skillsIndex === -1) ? "" : filterSkillsList[skillsIndex];
    let { filteredXP, swithToInitialPage } = sortingFinalXPDataFilterUtil(allXPData as xpType[], sortOrder, selectedRegion, selectedSkill);

    setSwitchPageToOne(swithToInitialPage || ((latestSearchQuery ?? searchQuery) != ""));
    setSelectedRegion(selectedRegion);
    setSelectedSkill(selectedSkill);
    setCountryRegionFilteredData(filteredXP);
    countryRegionFilteredDataVar = filteredXP;
    handleUserSearchValue(latestSearchQuery ?? searchQuery);
  }

  const handleSkillsFilterRemove = () => {
    setSelectedSkill("");
    setSkillsXPIndex(-1);
    filterXP(regionXPIndex, -1);
  }

  const handleRegionFilterRemove = () => {
    setSelectedRegion("");
    setRegionXPIndex(-1);
    filterXP(-1, skillsXPIndex);
  }

  const handleSort = (e: any) => {
    setSortOrder(e.target.value as SortByXp);
    const x = skillXPData.slice(0) as xpType[];
    let filteredXP = sortingFinalXPDataUtil(x, e.target.value as SortByXp, selectedSkill);

    setSkillXPData(filteredXP);
  }

  const handleUserSearch = (e: any) => {
    filterXP(regionXPIndex, skillsXPIndex, e.target.value);
  }

  const handleUserSearchValue = (searchName: string) => {
    let filteredXP = countryRegionFilteredDataVar.filter(value => value?.name.toLowerCase().includes(searchName.toLowerCase()));

    setSkillXPData(filteredXP);
    setSearchQuery(searchName);
  }

  const skillBackgroundColor = useColorModeValue("rgba(0, 0, 0, 0.08)", "rgba(255, 255, 255, 0.15)");
  const skillBorderColor = useColorModeValue("1px solid rgba(0, 0, 0, 0.24)", "1px solid rgba(255, 255, 255, 0.4)")


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
      <Stack
        maxW={'7xl'}
        mx="auto"
        w="full"
        direction={{ base: 'column', lg: 'row' }}
      // py={{ base: '2rem', md: '', lg: '3rem' }}
      >
        <VStack
          backgroundColor={{
            base: "transparent", md: useColorModeValue(
              'superteamGreyLT.950',
              'superteamGreyDT.900'
            )
          }}
          w="full"
          padding={{ base: 0, md: "1rem" }}
          borderRadius="6px"
          boxShadow={{
            base: "none",
            md: "0px 4px 8px rgba(0, 0, 0, 0.08)"
          }}

        >
          <Text
            w="full"
            fontSize={"14px"}
            textAlign={'start'}
            color={useColorModeValue(
              'superteamGreyDT.900',
              'superteamGreyDT.25'
            )}
            gap="0.5rem"
            display={{ base: "none", md: "block" }}
            fontWeight={600}
          >
            Superteam XP System
          </Text>
          <VStack
            w="full"
          >
            <Flex
              justify="space-between"
              direction={{ base: "column", md: "row" }}
              align="start"
              w="full"
            >
              <Center>
                <InputGroup
                  mb={{ base: "1rem", md: "none" }}
                >
                  <InputLeftElement h="full" pointerEvents="none">
                    <BiSearchAlt2
                      color={useColorModeValue(
                        'superteamGreyLT.300',
                        'superteamGreyLT.800'
                      )}
                    />
                  </InputLeftElement>
                  <Input
                    backgroundColor={useColorModeValue(
                      'white',
                      'superteamGreyDT.1000'
                    )}
                    boxShadow={{
                      base: "none",
                      md: "0px 2px 1px rgba(255, 255, 255, 0.08), inset 0px 1px 2px rgba(0, 0, 0, 0.48)"
                    }}
                    color={useColorModeValue(
                      'superteamGreyDT.700',
                      'superteamWhite.100'
                    )}
                    placeholder="Search User"
                    border={{ base: "1px solid rgba(255, 255, 255, 0.24)", md: "none" }}
                    borderRadius="4px"
                    rounded={'4px'}
                    _placeholder={{
                      color: useColorModeValue(
                        'superteamGreyLT.800',
                        'superteamGreyLT.800'
                      ),
                      fontSize: '12px',
                      fontWeight: '500',
                    }}
                    _focus={{
                      border: '1px solid',
                      borderColor: 'superteamBlue.900',
                    }}
                    h={{ base: "2.5rem", md: "2rem" }}
                    pb={'3px'}
                    value={searchQuery}
                    onChange={(e) => {
                      handleUserSearch(e);
                    }}
                    w={{ base: "92vw", md: "auto" }}
                  />
                </InputGroup>
              </Center>

              <Box
                borderRadius="4px"
                background={'transparent'}
                p="0"
                mr="0.1rem"
                display="flex"
                flexDir="row"
                alignItems="center"
              >
                <Select
                  boxShadow="0px 2px 1px rgba(255, 255, 255, 0.08), inset 0px 1px 2px rgba(0, 0, 0, 0.48)"
                  backgroundColor={useColorModeValue(
                    'superteamWhite.100',
                    'superteamGreyDT.1000'
                  )}
                  fontSize="12px"
                  fontWeight="light"
                  marginRight={"6px"}
                  _focus={{
                    bg: 'transparent',
                  }}
                  _hover={{
                    bg: 'transparent',
                  }}
                  h="2.2rem"
                  pb={'3px'}
                  rounded={'4px'}
                  value={sortOrder}
                  onChange={handleSort}
                >
                  {Object.values(SortByXp).map((sortByXp) => (
                    <option key={sortByXp} value={sortByXp}>
                      Sort: {sortByXp}
                    </option>
                  ))}
                </Select>
                {selectedSkill ? <Box
                  fontSize="13px"
                  backgroundColor={skillBackgroundColor}
                  border={skillBorderColor}
                  boxShadow="0px 2px 12px rgba(0, 0, 0, 0.24)"
                  borderRadius="16px"
                  p={"6px 12px"}
                  whiteSpace="nowrap"
                  mx="12px"
                >
                  Skill: {selectedSkill}
                  <Box as='span' ml="8px" cursor="pointer" fontWeight="bold" onClick={handleSkillsFilterRemove}>x</Box>
                </Box> : ""}
                {
                  selectedRegion ? <Box
                    fontSize="13px"
                    backgroundColor={skillBackgroundColor}
                    border={skillBorderColor}
                    boxShadow="0px 2px 12px rgba(0, 0, 0, 0.24)"
                    borderRadius="16px"
                    p={"6px 12px"}
                    whiteSpace="nowrap"
                    mx="12px"
                  >
                    Region: {selectedRegion}
                    <Box as='span' ml="8px" cursor="pointer" fontWeight="bold" onClick={handleRegionFilterRemove}>x</Box>
                  </Box> : ""
                }
                <Menu closeOnSelect={false}>
                  <MenuButton >
                    <BiFilterAlt
                      color={useColorModeValue(
                        'superteamBlack.100',
                        'superteamWhite.100'
                      )}
                      fontSize={"24px"}
                    />
                  </MenuButton>
                  <MenuList
                    backgroundColor={useColorModeValue(
                      "rgba(0, 34, 214, 0.12)",
                      "rgba(255, 255, 255, 0.25)"
                    )}
                    fontSize="12px"
                    border={useColorModeValue(
                      "1px solid rgba(0, 34, 214, 0.24)",
                      "1px solid rgba(255, 255, 255, 0.4)"
                    )}
                    borderRadius="4px"
                    minWidth="108px"
                  >
                    <MenuGroup title='Filter' fontWeight="400" borderBottom="1px solid rgba(255, 255, 255, 0.4)">
                      <MenuItem
                        backgroundColor="transparent"
                        _hover={{
                          backgroundColor: useColorModeValue(
                            "rgba(0, 34, 214, 0.12)",
                            "rgba(255, 255, 255, 0.25)"
                          )
                        }}
                        p="8px"
                        m="8px"
                        w="96px"
                      >
                        <Popover placement="left-start">
                          <PopoverTrigger>
                            <Text w="64px">Country</Text>
                          </PopoverTrigger>
                          <PopoverContent
                            w="124px"
                            backgroundColor={useColorModeValue(
                              "rgba(0, 34, 214, 0.12)",
                              "rgba(255, 255, 255, 0.25)"
                            )}
                            fontSize="12px"
                            mr="8px"
                          >
                            <Flex
                              direction="column"
                              padding="4px 8px"
                              border={useColorModeValue(
                                "1px solid rgba(0, 34, 214, 0.24)",
                                "1px solid rgba(255, 255, 255, 0.4)"
                              )}
                              borderRadius="4px"
                            >
                              {filterRegionList.map((item, index) =>
                                <Box
                                  mb="4px"
                                  _hover={{
                                    backgroundColor: "rgba(255, 255, 255, 0.55)"
                                  }}
                                  p="4px"
                                  cursor="pointer"
                                  key={index}
                                  w="104px"
                                  onClick={() => {
                                    setRegionXPIndex(index);
                                    filterXP(index, skillsXPIndex);
                                  }}
                                >
                                  {item}
                                </Box>
                              )}
                            </Flex>
                          </PopoverContent>
                        </Popover>
                      </MenuItem>

                      <MenuItem
                        backgroundColor="transparent"
                        _hover={{
                          backgroundColor: useColorModeValue(
                            "rgba(0, 34, 214, 0.12)",
                            "rgba(255, 255, 255, 0.25)"
                          )
                        }}
                        p="8px"
                        m="8px"
                        w="96px"
                      >
                        <Popover placement="left-start">
                          <PopoverTrigger>
                            <Text w="64px">Skill</Text>
                          </PopoverTrigger>
                          <PopoverContent
                            w="124px"
                            backgroundColor={useColorModeValue(
                              "rgba(0, 34, 214, 0.12)",
                              "rgba(255, 255, 255, 0.25)"
                            )}
                            fontSize="12px"
                            mr="8px"
                          >
                            <Flex
                              direction="column"
                              padding="4px 8px"
                              border={useColorModeValue(
                                "1px solid rgba(0, 34, 214, 0.24)",
                                "1px solid rgba(255, 255, 255, 0.4)"
                              )}
                              borderRadius="4px"
                            >
                              {filterList.map((item, index) =>
                                <Box
                                  mb="4px"
                                  _hover={{
                                    backgroundColor: "rgba(255, 255, 255, 0.55)"
                                  }}
                                  p="4px"
                                  cursor="pointer"
                                  key={index}
                                  w="104px"
                                  onClick={() => {
                                    setSkillsXPIndex(index);
                                    filterXP(regionXPIndex, index);
                                  }}
                                >
                                  {item}
                                </Box>
                              )}
                            </Flex>
                          </PopoverContent>
                        </Popover>
                      </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          </VStack>
        </VStack>
      </Stack>
      <Stack
        maxW={'7xl'}
        mx="auto"
        w="full"
        direction={{ base: 'column', lg: 'row' }}
      >
        <VStack w="full">
          <EnhancedTable
            row={skillXPData}
            sortOrder={sortOrder}
            searchResult={searchResult}
            initialPage={switchPageToOne}
            searchedQuery={searchQuery}
          />
        </VStack>
      </Stack>
    </Container >

    // OLD DATA FOR SORTING
    // <VStack maxW="7xl" mx="auto" align={'start'} justify="start" py="1rem">
    //   <Heading
    //     color={useColorModeValue(
    //       'superteamGreyLT.800',
    //       'superteamGreyLT.800'
    //     )}
    //     fontWeight={'600'}
    //     fontSize={'14px'}
    //     textTransform="uppercase"
    //   >
    //     Browse By
    //   </Heading>
    //   <Tabs
    //     w="full"
    //     index={activeTab}
    //     onChange={(index) => setActiveTab(index)}
    //     borderBottom={'1px solid'}
    //     borderColor={useColorModeValue(
    //       'superteamGreyLT.500',
    //       'superteamGreyDT.50'
    //     )}
    //     onDrag={() => {
    //       //todo: add draggable tabs for mobile ( on right drag tab should change to the next right tab ) console.log('tab dragged');
    //       // to implement it find a function or hook that can be changed to change the index of current tab
    //     }}
    //   >
    //     <TabList
    //       gap="2rem"
    //       borderBottom={'1px solid '}
    //       borderColor={useColorModeValue(
    //         'superteamGreyLT.500',
    //         'superteamGreyDT.50'
    //       )}
    //       css={css({
    //         scrollbarWidth: 'none',
    //         '::-webkit-scrollbar': { display: 'none' },
    //         WebkitOverflowXScrolling: 'touch', // todo: here there is a bug remove the scrollbar in x direction
    //       })}
    //       overflowX="scroll"
    //       overflowY={'visible'}
    //       minH="3.5rem"
    //       h={'fit-content'}
    //     >
    //       {tabsList.map((tabName, index) => (
    //         <CustomTab key={index} title={tabName} />
    //       ))}

    //       {/* <Tab
    //         h="3.35rem"
    //         px="0"
    //         py="0.9rem"
    //         fontSize={'14px'}
    //         fontWeight="400"
    //         whiteSpace="nowrap"
    //         color={useColorModeValue(
    //           'superteamGreyDT.100',
    //           'superteamGreyLT.800'
    //         )}
    //         _active={{
    //           color: useColorModeValue(
    //             'superteamBlack.100',
    //             'superteamWhite.100'
    //           ),
    //         }}
    //         _selected={{
    //           color: useColorModeValue(
    //             'superteamBlack.100',
    //             'superteamWhite.100'
    //           ),
    //           borderBottom: '2px solid',
    //           borderColor: useColorModeValue('superteamOrange.800', 'superteamBlueLT.800'),
    //         }}
    //       >
    //         Bounties
    //       </Tab> */}

    //     </TabList>
    //     <Flex
    //       display={{ base: 'flex', md: 'flex', lg: 'none' }}
    //       w="full"
    //       flexDir={'column'}
    //       justify="center"
    //       alignItems={'flex-start'}
    //       mt="8"
    //     >
    //       <Box
    //         borderRadius="4px"
    //         background={'transparent'}
    //         maxW="14rem"
    //         p="0"
    //         mr="0.1rem"
    //       >
    //         <Select
    //           color={useColorModeValue(
    //             'superteamBlack.100',
    //             'superteamGreyLT.800'
    //           )}
    //           bg={'transparent'}
    //           outline={'1px solid '}
    //           outlineColor={useColorModeValue(
    //             'superteamGreyLT.300',
    //             'superteamGreyLT.800'
    //           )}
    //           _focus={{
    //             bg: 'transparent',
    //           }}
    //           _hover={{
    //             bg: 'transparent',
    //           }}
    //           h="2.5rem"
    //           pb={'3px'}
    //           rounded={'4px'}
    //           fontWeight="500"
    //           fontSize={'12px'}
    //           value={sortOrder}
    //           onChange={(e) => {
    //             setSortOrder(e.target.value as SortByXp);
    //           }}
    //         >
    //           {Object.values(SortByXp).map((sortByXp) => (
    //             <option key={sortByXp} value={sortByXp}>
    //               Sort by | {sortByXp}
    //             </option>
    //           ))}
    //         </Select>
    //       </Box>
    //     </Flex>
    //     <TabPanels {...handlers} p="0">
    //       <TabPanel p="0">
    //         <EnhancedTable
    //           row={allXPData}
    //           sortOrder={sortOrder}
    //           searchResult={searchResult}
    //         />
    //       </TabPanel>
    //       <TabPanel p="0">
    //         <EnhancedTable
    //           row={filteredMembersData}
    //           sortOrder={sortOrder}
    //           searchResult={searchResult}
    //         />
    //       </TabPanel>
    //       <TabPanel p="0">
    //         <EnhancedTable
    //           row={filteredContributorsData}
    //           sortOrder={sortOrder}
    //           searchResult={searchResult}
    //         />
    //       </TabPanel>{' '}
    //       <TabPanel p="0">
    //         <EnhancedTable
    //           row={filteredProjectWorkXPData}
    //           sortOrder={sortOrder}
    //           searchResult={searchResult}
    //         />
    //       </TabPanel>
    //       <TabPanel p="0">
    //         <EnhancedTable
    //           row={filteredIndieWorkXPData}
    //           sortOrder={sortOrder}
    //           searchResult={searchResult}
    //         />
    //       </TabPanel>
    //       <TabPanel p="0">
    //         <EnhancedTable
    //           row={filteredInternalOperationsXPData}
    //           sortOrder={sortOrder}
    //           searchResult={searchResult}
    //         />
    //       </TabPanel>{' '}
    //       <TabPanel p="0">
    //         <EnhancedTable
    //           row={filteredWorkingGroupXPData}
    //           sortOrder={sortOrder}
    //           searchResult={searchResult}
    //         />
    //       </TabPanel>
    //       <TabPanel p="0">
    //         <EnhancedTable
    //           row={filteredStackExchangeXPData}
    //           sortOrder={sortOrder}
    //           searchResult={searchResult}
    //         />
    //       </TabPanel>
    //       {/* <TabPanel p="0">
    //         <EnhancedTable
    //           row={filteredBountiesXPData}
    //           sortOrder={sortOrder}
    //         />
    //       </TabPanel> */}
    //     </TabPanels>
    //   </Tabs>
    // </VStack>
  );
};

export default LeaderBoardWrapper;
