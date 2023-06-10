import {
  Box, Button, Container,
  Heading, Stack,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { receivedXPFromAirtableType } from './Row/interfaces/airtableRecievedXP';

type propsType = {
  lastSevenDaysData: receivedXPFromAirtableType[];
};

const DashboardHeader = ({
  lastSevenDaysData,
}: propsType) => {
  // --- WEEKLY TOP DATA ---- COMMENTED FOR NOW
  // const grouped: receivedXPFromAirtableType[] = [];

  // for (let i = 0; i < lastSevenDaysData.length; i++) {
  //   const element = lastSevenDaysData[i];
  //   if (grouped.some((el) => el.name === element.name)) {
  //     // now check if the skill is same if it is same then add the xp if not then create a new element
  //     if (
  //       grouped.some(
  //         (el) => el.xp.skill.toLowerCase() === element.xp.skill.toLowerCase()
  //       )
  //     ) {
  //       const index = grouped.findIndex((el) => el.name === element.name);
  //       grouped[index].xp.total_amount += element.xp.total_amount;
  //     } else {
  //       // @ts-ignore
  //       grouped.push({
  //         name: element.name,
  //         xp: {
  //           // @ts-ignore
  //           skill: element.xp.skill.toLowerCase(),
  //           date: element.xp.date,
  //           total_amount: element.xp.total_amount,
  //         },
  //       });
  //     }
  //   } else {
  //     // @ts-ignore
  //     grouped.push({
  //       name: element.name,
  //       xp: {
  //         // @ts-ignore
  //         skill: element.xp.skill.toLowerCase(),
  //         date: element.xp.date,
  //         total_amount: element.xp.total_amount,
  //       },
  //     });
  //   }
  // }

  // console.log('grouped - ', grouped);
  // // separate all the skills
  // const development = grouped.filter((el) => el.xp.skill === skillKind.DEV);
  // const design = grouped.filter((el) => el.xp.skill === skillKind.DESIGN);
  // const ops = grouped.filter((el) => el.xp.skill === skillKind.OPS);
  // const strategy = grouped.filter((el) => el.xp.skill === skillKind.STRATEGY);
  // const video = grouped.filter((el) => el.xp.skill === skillKind.VIDEO);
  // const writing = grouped.filter((el) => el.xp.skill === skillKind.WRITING);
  // console.log('writing - ', writing);

  // const [selectedSkill, setSelectedSkill] = useState(development);

  // const router = useRouter();

  // const lightTextColor = useColorModeValue(
  //   'superteamGreyLT.800',
  //   'superteamGreyDT.100'
  // );
  // const darkTextColor = useColorModeValue(
  //   'superteamBlack.100',
  //   'superteamWhite.100'
  // );

  return (
    <Container
      fontFamily={'Inter'}
      maxW={'full'}
      backgroundColor={useColorModeValue(
        'superteamGreyLT.125',
        'superteamGreyDT.850'
      )}
      py="1rem"
      px={{ base: "1.5rem", md: "3rem" }}

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
          maxW={'524px'}
          py={{ base: '2rem', md: '', lg: '1rem' }}
          gap="0.6rem"
          height={'fit-content'}
          align={'top'}
        >
          <Heading
            w="full"
            textAlign={'start'}
            fontSize={['2xl', '2xl', '3xl']}
            fontWeight="800"
            color={useColorModeValue(
              'superteamBlack.100',
              'superteamWhite.100'
            )}
            display="flex"
            gap="0.5rem"
            marginBottom="0.5rem"
          >
            <Box as="span">Welcome to the Superteam Reputation System</Box>
            {/* <Box as="span">Superteam</Box>{' '}
            <Box as="span" fontWeight={'200'}>
              /
            </Box>{' '}
            <Box as="span">XP System</Box> */}
          </Heading>

          <Box marginTop="20px" fontSize="14px">
            In our community, being able to know who to trust and who has proven shipping abilities
            is essential. Our (work-in-progress) Reputation System captures Member contributions and
            gives them XP so that Project Leads know which Members are reliable.
          </Box>
          <Button
            bg={useColorModeValue('superteamBlueLT.800', 'superteamOrange.800')}
            color={useColorModeValue('superteamWhite.100', 'black')}
            variant={'unstyled'}
            w="12rem"
            fontSize={"14px"}
            onClick={() => window.open("https://superteam-onboarding.gitbook.io/the-superteam-handbook/community/the-reputation-system")}
          >
            Superteam Handbook
          </Button>
        </VStack>

        {
          // WEEKLY TOP - NEW DESIGN - COMMENTED OUT UNTIL DATA IS CORRECTED
        }
        {/* <HStack
          align={'top'}
          minH={'17rem'}
        >
          <Box
            w="15rem"
            h="20rem"
            background={"rgba(109, 112, 255, 0.12)"}
            filter="blur(50px)"
            position="absolute"
            zIndex="1"
            marginLeft="5rem"
            marginTop="-2.5rem"
            display={["none", "block", "block"]}
          ></Box>
          <Box
            zIndex="3"
            display="flex"
            flexDir={'column'}
            alignItems="flex-start"
            backgroundColor={useColorModeValue(
              'superteamGreyLT.900',
              'superteamGreyDT.900'
            )}
            borderRadius={"8px"}
            position={["absolute", "relative", "relative"]}
            right="0rem"
            padding="2rem"
          >
            <HStack
              width={'fit-content'}
              roundedTop={'4px'}
              padding="6px"
              fontSize={'13px'}
              color="white"
              whiteSpace="nowrap"
              border={'1px solid'}
              borderColor={useColorModeValue(
                'superteamBlueLT.800',
                'superteamGreyDT.950'
              )}
              boxShadow="0px 2px 1px rgba(255, 255, 255, 0.08), inset 0px 2px 4px rgba(0, 0, 0, 0.48)"
              boxSizing="border-box"
              marginBottom="0.8rem"
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
              roundedBottom="4px"
              roundedTopLeft={'4px'}
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
                      border="1px solid rgba(255, 255, 255, 0.08)"
                      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.48)"
                      padding="6px 14px"
                    >
                      <HStack alignItems={'flex-start'}>
                        <VStack alignItems={'start'}>
                          <Text
                            lineHeight={'12px'}
                            color={darkTextColor}
                            fontSize={'13px'}
                            textTransform="capitalize"
                            textAlign={'start'}
                          >
                            <Box as="span" marginRight="1rem">{index + 1}. </Box> {el.name.split('#')[0]}
                          </Text>

                        </VStack>
                      </HStack>
                      <HStack>
                        <Text
                          fontWeight={'600'}
                          color={darkTextColor}
                          fontSize={'13px'}
                        >
                          {el.xp.total_amount}
                        </Text>{' '}
                        <Box
                          as='span'
                          backgroundColor="rgba(255,255,255,0.08)"
                          padding="2px 8px"
                          fontSize="11px"
                          position="relative"
                          top="1px"
                        >
                          XP
                        </Box>
                      </HStack>
                    </Center>
                  );
                })}
            </VStack>
          </Box>

          {// ------ OLD MENU COMMENTED OUT ----------
          }
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
              </MenuList>
            </Menu> }
        </HStack> */}
      </Stack>
    </Container >
  );
};

export default DashboardHeader;
