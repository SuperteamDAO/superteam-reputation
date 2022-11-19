import {
  Container,
  Heading,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Flex,
  InputGroup,
  InputLeftElement,
  Icon,
  css,
} from '@chakra-ui/react';
import React from 'react';
import EnhancedTable from './Leaderboard';
import { HiSearch } from 'react-icons/hi';
import { xpTableType } from '../../interfaces/xpTable';
import { filters } from '../../interfaces/filters.enum';

type propsType = {
  xpData: xpTableType[];
};

const LeaderBoardWrapper = ({ xpData }: propsType) => {
  const [wordEntered, setWordEntered] = React.useState('');
  const [data, setData] = React.useState(xpData);
  const [searching, _setSearching] = React.useState(false);

  const ContributorsData: xpTableType[] = data.filter(
    (person) => person.person_type === 'Contributor'
  );

  const MembersData: xpTableType[] = data.filter(
    (person) => person.person_type === 'Member'
  );

  const Developers: xpTableType[] = data.filter((person) => person.dev_xp > 0);
  const Designers: xpTableType[] = data.filter(
    (person) => person.design_xp > 0
  );
  const Strategies: xpTableType[] = data.filter(
    (person) => person.strategy_xp > 0
  );
  const Operations: xpTableType[] = data.filter((person) => person.ops_xp > 0);
  const Videography: xpTableType[] = data.filter(
    (person) => person.video_xp > 0
  );
  const Writers: xpTableType[] = data.filter((person) => person.writing_xp > 0);

  const handleSearch = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value: { name: string }) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setData(xpData);
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
          borderColor="superteam_black.200"
          onDrag={() => {
            console.log('tab dragged');
          }}
        >
          <TabList
            gap="2rem"
            borderBottom={'1px solid '}
            borderColor="superteam_black.200"
            css={css({
              scrollbarWidth: 'none',
              '::-webkit-scrollbar': { display: 'none' },
              '-webkit-overflow-x-scrolling': 'touch',
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
              _active={{
                color: 'superteam_white',
              }}
              _selected={{
                color: 'superteam_white',
                borderBottom: '2px solid',
                borderColor: 'superteam_blue.900',
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
              _active={{
                color: 'superteam_white',
              }}
              _selected={{
                color: 'superteam_white',
                borderBottom: '2px solid',
                borderColor: 'superteam_blue.900',
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
              _active={{
                color: 'superteam_white',
              }}
              _selected={{
                color: 'superteam_white',
                borderBottom: '2px solid',
                borderColor: 'superteam_blue.900',
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
              _active={{
                color: 'superteam_white',
              }}
              _selected={{
                color: 'superteam_white',
                borderBottom: '2px solid',
                borderColor: 'superteam_blue.900',
              }}
            >
              Design
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              _active={{
                color: 'superteam_white',
              }}
              _selected={{
                color: 'superteam_white',
                borderBottom: '2px solid',
                borderColor: 'superteam_blue.900',
              }}
            >
              Development
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              _active={{
                color: 'superteam_white',
              }}
              _selected={{
                color: 'superteam_white',
                borderBottom: '2px solid',
                borderColor: 'superteam_blue.900',
              }}
            >
              Operations
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              _active={{
                color: 'superteam_white',
              }}
              _selected={{
                color: 'superteam_white',
                borderBottom: '2px solid',
                borderColor: 'superteam_blue.900',
              }}
            >
              Video
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              _active={{
                color: 'superteam_white',
              }}
              _selected={{
                color: 'superteam_white',
                borderBottom: '2px solid',
                borderColor: 'superteam_blue.900',
              }}
            >
              Strategy
            </Tab>
            <Tab
              h="3.35rem"
              px="0"
              py="0.9rem"
              fontSize={'14px'}
              fontWeight="400"
              _active={{
                color: 'superteam_white',
              }}
              _selected={{
                color: 'superteam_white',
                borderBottom: '2px solid',
                borderColor: 'superteam_blue.900',
              }}
            >
              Writing
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
                  color={'superteam_white'}
                  placeholder="Search User"
                  outline={'1px solid '}
                  outlineColor="superteam_black.200"
                  border={'none'}
                  borderRadius="4px"
                  rounded={'4px'}
                  _placeholder={{
                    color: 'superteam_gray.400',
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
                color={'superteam_white'}
                placeholder="Search User"
                outline={'1px solid '}
                outlineColor="superteam_black.200"
                border={'none'}
                borderRadius="4px"
                rounded={'4px'}
                _placeholder={{
                  color: 'superteam_black.800',
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
              <EnhancedTable
                row={data}
                _filter_by={filters.TOTAL}
                searching={searching}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={MembersData}
                _filter_by={filters.TOTAL}
                searching={searching}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={ContributorsData}
                _filter_by={filters.TOTAL}
                searching={searching}
              />
            </TabPanel>{' '}
            <TabPanel p="0">
              <EnhancedTable
                row={Designers}
                _filter_by={filters.DESIGN}
                searching={searching}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={Developers}
                _filter_by={filters.DEV}
                searching={searching}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={Operations}
                _filter_by={filters.OPS}
                searching={searching}
              />
            </TabPanel>{' '}
            <TabPanel p="0">
              <EnhancedTable
                row={Videography}
                _filter_by={filters.VIDEO}
                searching={searching}
              />
            </TabPanel>
            <TabPanel p="0">
              <EnhancedTable
                row={Strategies}
                _filter_by={filters.STRATEGY}
                searching={searching}
              />
            </TabPanel>{' '}
            <TabPanel p="0">
              <EnhancedTable
                row={Writers}
                _filter_by={filters.WRITING}
                searching={searching}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

export default LeaderBoardWrapper;
