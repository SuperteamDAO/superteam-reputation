import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { skillKind } from '../../enums/skill';
import CustomTag from '../HOC/Tag.HOC';
import MedalSVG from '../Logo/MedalSVG';
import { receivedXPFromAirtableType } from './Row/interfaces/airtableRecievedXP';

type propsType = {
  lastSevenDaysData: receivedXPFromAirtableType[];
  handleSearch: (event: { target: { value: any } }) => void;
  wordEntered: string;
};

const DashboardHeader = ({
  lastSevenDaysData,
  handleSearch,
  wordEntered,
}: propsType) => {
  const grouped: receivedXPFromAirtableType[] = [];

  for (let i = 0; i < lastSevenDaysData.length; i++) {
    const element = lastSevenDaysData[i];
    if (grouped.some((el) => el.name === element.name)) {
      // now check if the skill is same if it is same then add the xp if not then create a new element
      if (
        grouped.some(
          (el) => el.xp.skill.toLowerCase() === element.xp.skill.toLowerCase()
        )
      ) {
        const index = grouped.findIndex((el) => el.name === element.name);
        grouped[index].xp.total_amount += element.xp.total_amount;
      } else {
        // @ts-ignore
        grouped.push({
          name: element.name,
          xp: {
            // @ts-ignore
            skill: element.xp.skill.toLowerCase(),
            date: element.xp.date,
            total_amount: element.xp.total_amount,
          },
        });
      }
    } else {
      // @ts-ignore
      grouped.push({
        name: element.name,
        xp: {
          // @ts-ignore
          skill: element.xp.skill.toLowerCase(),
          date: element.xp.date,
          total_amount: element.xp.total_amount,
        },
      });
    }
  }

  console.log('grouped - ', grouped);
  // separate all the skills
  const development = grouped.filter((el) => el.xp.skill === skillKind.DEV);
  const design = grouped.filter((el) => el.xp.skill === skillKind.DESIGN);
  const ops = grouped.filter((el) => el.xp.skill === skillKind.OPS);
  const strategy = grouped.filter((el) => el.xp.skill === skillKind.STRATEGY);
  const video = grouped.filter((el) => el.xp.skill === skillKind.VIDEO);
  const writing = grouped.filter((el) => el.xp.skill === skillKind.WRITING);
  console.log('writing - ', writing);

  const [selectedSkill, setSelectedSkill] = useState(development);

  const router = useRouter();

  const lightTextColor = useColorModeValue(
    'superteamGreyLT.800',
    'superteamGreyDT.100'
  );
  const darkTextColor = useColorModeValue(
    'superteamBlack.100',
    'superteamSurfacePrimaryLM.100'
  );
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
      <Stack
        maxW={'7xl'}
        mx="auto"
        w="full"
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        alignItems={'start'}
        gap={['2rem', '3rem', 'auto']}
        py={{ base: '2rem', md: '', lg: '3rem' }}
      >
        <VStack
          width={'fit-content'}
          maxW={'422px'}
          py={{ base: '2rem', md: '', lg: '1rem' }}
          gap="0.6rem"
          height={'fit-content'}
          align={'top'}
        >
          <Heading
            w="full"
            textAlign={'start'}
            fontSize={['17px', '18px', '20px']}
            fontWeight="800"
            color={useColorModeValue(
              'superteamBlack.100',
              'superteamSurfacePrimaryLM.100'
            )}
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
            <Box as="span">XP System</Box>
          </Heading>

          <Box>
            <InputGroup>
              <InputLeftElement h="full" pointerEvents="none">
                <BiSearchAlt2
                  color={useColorModeValue(
                    'superteamGreyDT.700',
                    'superteamGreyLT.800'
                  )}
                />
              </InputLeftElement>
              <Input
                color={useColorModeValue(
                  'superteamGreyDT.700',
                  'superteamSurfacePrimaryLM.100'
                )}
                placeholder="Search User"
                outline={'1px solid '}
                outlineColor={useColorModeValue(
                  'superteamGreyLT.700',
                  'superteamGreyLT.800'
                )}
                border={'none'}
                borderRadius="4px"
                rounded={'4px'}
                _placeholder={{
                  color: useColorModeValue(
                    'superteamGreyDT.800',
                    'superteamGreyLT.800'
                  ),
                  fontSize: '12px',
                  fontWeight: '500',
                }}
                _focus={{
                  border: '1px solid',
                  borderColor: 'superteamBlue.900',
                }}
                h="2rem"
                pb={'3px'}
                value={wordEntered}
                onChange={handleSearch}
              />
            </InputGroup>
          </Box>
        </VStack>
        <HStack
          align={'top'}
          minH={'13rem'}
          gap="1.2rem"
          width={['full', 'auto', 'auto', 'auto']}
          justify={'space-between'}
        >
          <Box display="flex" flexDir={'column'} alignItems="end">
            <HStack
              width={'fit-content'}
              roundedTop={'4px'}
              padding="6px 12px"
              fontSize={'13px'}
              backgroundColor={useColorModeValue(
                'superteamBlueLT.800',
                'superteamOrange.800'
              )}
              color="white"
              whiteSpace="nowrap"
            >
              <Text>Weekly top : </Text>
              <Select
                variant="unstyled"
                fontSize={'13px'}
                onChange={(e) => {
                  e.preventDefault;
                  const selectedValue = e.target.value;
                  if (selectedValue === skillKind.DEV)
                    setSelectedSkill(development);
                  else if (selectedValue === skillKind.DESIGN)
                    setSelectedSkill(design);
                  else if (selectedValue === skillKind.OPS)
                    setSelectedSkill(ops);
                  else if (selectedValue === skillKind.STRATEGY)
                    setSelectedSkill(strategy);
                  else if (selectedValue === skillKind.VIDEO)
                    setSelectedSkill(video);
                  else if (selectedValue === skillKind.WRITING)
                    setSelectedSkill(writing);
                }}
              >
                <option value={skillKind.DEV}>Development</option>
                <option value={skillKind.DESIGN}>Design</option>
                <option value={skillKind.STRATEGY}>Strategy</option>
                <option value={skillKind.OPS}>Operations</option>
                <option value={skillKind.VIDEO}>Video</option>
                <option value={skillKind.WRITING}>Writing</option>
              </Select>
            </HStack>
            <VStack
              padding={'16px 20px'}
              roundedBottom="4px"
              roundedTopLeft={'4px'}
              border={'1px solid'}
              borderColor={useColorModeValue(
                'superteamBlueLT.800',
                'superteamOrange.800'
              )}
              gap="0.6rem"
              w="20rem"
            >
              {selectedSkill
                .sort((a, b) => b.xp.total_amount - a.xp.total_amount)
                .slice(0, 3)
                .map((el, index) => {
                  return (
                    <Center
                      w={'100%'}
                      justifyContent="space-between"
                      key={index}
                      flexDir={'row'}
                    >
                      <HStack gap="1.2rem" alignItems={'flex-start'}>
                        <MedalSVG index={index + 1} showIndex={false} />
                        <VStack alignItems={'start'}>
                          <Text
                            lineHeight={'12px'}
                            fontWeight={'600'}
                            color={darkTextColor}
                            fontSize={'14px'}
                            textTransform="capitalize"
                            textAlign={'start'}
                          >
                            {el.name.split('#')[0]}
                          </Text>
                          <Text
                            lineHeight={'10px'}
                            color={lightTextColor}
                            opacity="0.8"
                            fontSize={'12px'}
                          >
                            {el.name}
                          </Text>
                        </VStack>
                      </HStack>
                      <HStack>
                        <Text
                          fontWeight={'600'}
                          color={darkTextColor}
                          fontSize={'14px'}
                        >
                          {el.xp.total_amount}
                        </Text>{' '}
                        <CustomTag text="XP" />
                      </HStack>
                    </Center>
                  );
                })}
            </VStack>
          </Box>
          {/* <Text
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
            </Menu> */}
        </HStack>
      </Stack>
    </Container>
  );
};

export default DashboardHeader;
