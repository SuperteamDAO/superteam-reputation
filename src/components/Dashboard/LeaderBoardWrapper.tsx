import {
  Container,
  css,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { HiSearch } from 'react-icons/hi';
import EnhancedTable from './Leaderboard';
import { dashboardDataType } from './Row/interfaces/dashboardStore';

type propsType = {
  dashboardData: dashboardDataType[];
};

const LeaderBoardWrapper = ({ dashboardData }: propsType) => {
  const [wordEntered, setWordEntered] = React.useState('');
  const [data, setData] = React.useState(dashboardData);
  const [searching, _setSearching] = React.useState(false);

  const ContributorsData = data.map((item) => {
    if (item.personType === 'Contributor') {
      return item.overallXP.details;
    }
  });

  const ContributorsDataFiltered = ContributorsData.filter(
    (item) => item !== undefined
  );

  const MembersData = data.map((item) => {
    if (item.personType === 'Member') {
      return item.overallXP.details;
    }
  });

  const filteredMembersData = MembersData.filter((item) => item !== undefined);

  const ProjectWorkXPData = data.map((item) => {
    if (item.projectWorkXP) {
      return item.projectWorkXP;
    }
  });

  // filter the undefined values from the projectworkxp array
  const filteredProjectWorkXPData = ProjectWorkXPData.filter(
    (item) => item !== undefined
  );

  const IndieWorkXPData = data.map((item) => {
    if (item.indieWorkXP) {
      return item.indieWorkXP;
    }
  });

  // filter the undefined values from the indieWorkXP array
  const filteredIndieWorkXPData = IndieWorkXPData.filter(
    (item) => item !== undefined
  );

  const workingGroupXPData = data.map((item) => {
    if (item.internalOps) {
      return item.internalOps;
    }
  });

  // filter the undefined values from the workingGroupXP array
  const filteredWorkingGroupXPData = workingGroupXPData.filter(
    (item) => item !== undefined
  );

  const allXPData = data.map((item) => {
    if (item.overallXP.details) {
      return item.overallXP.details;
    }
  });

  const handleSearch = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value: { name: string }) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setData(dashboardData);
    } else {
      setData(newFilter);
    }
  };
  return (
    <Container maxW="full" p="1rem">
      <VStack maxW="7xl" mx="auto" align={'start'} justify="start" py="1rem">
        <Heading fontWeight={'600'} fontSize={'14px'} textTransform="uppercase">
          Browse By
        </Heading>
        <Tabs
          w="full"
          borderBottom={'1px solid'}
          borderColor="superteamBlack.200"
          onDrag={() => {
            //todo: add draggable tabs for mobile ( on right drag tab should change to the next right tab ) console.log('tab dragged');
            // to implement it find a function or hook that can be changed to change the index of current tab
          }}
        >
          <TabList
            gap="2rem"
            borderBottom={'1px solid '}
            borderColor="superteamBlack.200"
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
              _active={{
                color: 'superteamWhite',
              }}
              _selected={{
                color: 'superteamWhite',
                borderBottom: '2px solid',
                borderColor: 'superteamBlue.900',
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
              _active={{
                color: 'superteamWhite',
              }}
              _selected={{
                color: 'superteamWhite',
                borderBottom: '2px solid',
                borderColor: 'superteamBlue.900',
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
              _active={{
                color: 'superteamWhite',
              }}
              _selected={{
                color: 'superteamWhite',
                borderBottom: '2px solid',
                borderColor: 'superteamBlue.900',
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
              _active={{
                color: 'superteamWhite',
              }}
              _selected={{
                color: 'superteamWhite',
                borderBottom: '2px solid',
                borderColor: 'superteamBlue.900',
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
              _active={{
                color: 'superteamWhite',
              }}
              _selected={{
                color: 'superteamWhite',
                borderBottom: '2px solid',
                borderColor: 'superteamBlue.900',
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
              _active={{
                color: 'superteamWhite',
              }}
              _selected={{
                color: 'superteamWhite',
                borderBottom: '2px solid',
                borderColor: 'superteamBlue.900',
              }}
            >
              Internal Operations
            </Tab>
            <Flex
              display={{ base: 'none', md: 'none', lg: 'flex' }}
              w="full"
              flexDir={'column'}
              justify="center"
              alignItems={'end'}
              borderRadius="4px"
              rounded={'4px'}
            >
              <InputGroup
                borderRadius="4px"
                background={'transparent'}
                maxW="14rem"
                p="0"
                mr="0.1rem"
              >
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
                    color: 'superteamGray.400',
                    fontSize: '12px',
                  }}
                  h="2rem"
                  pb={'3px'}
                  value={wordEntered}
                  onChange={handleSearch}
                />
              </InputGroup>
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
            <InputGroup maxW="full" mt="1rem">
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
              />
            </InputGroup>
          </Flex>
          <TabPanels p="0">
            <TabPanel p="0">
              <EnhancedTable row={allXPData} searching={searching} />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable row={filteredMembersData} searching={searching} />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={ContributorsDataFiltered}
                searching={searching}
              />
            </TabPanel>{' '}
            <TabPanel p="0">
              <EnhancedTable
                row={filteredProjectWorkXPData}
                searching={searching}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredIndieWorkXPData}
                searching={searching}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={filteredWorkingGroupXPData}
                searching={searching}
              />
            </TabPanel>{' '}
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

export default LeaderBoardWrapper;
