import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { skillKind } from '../../../enums/skill';
import { xpType } from '../../../interfaces/xp';
import { memberDetailsType, projectDataType } from '../../../pages/projects';
import CustomChip from '../../HOC/Chip.HOC';
import CustomTag from '../../HOC/Tag.HOC';
type propsType = {
  expandRow: boolean;
  row: xpType;
};

export const ExpandedRow = ({ expandRow, row }: propsType) => {
  return (
    <Tr
      display={expandRow ? 'auto' : 'none'}
      bg={useColorModeValue('superteamGreyLT.50', 'superteamGreyDT.900')}
      borderBottom="1px solid "
      borderColor={useColorModeValue(
        'superteamGreyLT.500',
        'superteamGreyDT.50'
      )}
    >
      <Td>
        <div></div>
      </Td>
      <Td>
        <Flex direction={'column'} gap="0.7rem">
          {row?.skills.map((skill, key) => {
            if (skill.skill === skillKind.DEV) {
              return (
                <Text key={key} fontSize="14px">
                  Development
                </Text>
              );
            }
            if (skill.skill === skillKind.DESIGN) {
              return (
                <Text key={key} fontSize="14px">
                  Design
                </Text>
              );
            }
            if (skill.skill === skillKind.STRATEGY) {
              return (
                <Text key={key} fontSize="14px">
                  Strategy
                </Text>
              );
            }
            if (skill.skill === skillKind.VIDEO) {
              return (
                <Text key={key} fontSize="14px">
                  Videography
                </Text>
              );
            }
            if (skill.skill === skillKind.WRITING) {
              return (
                <Text key={key} fontSize="14px">
                  Writing
                </Text>
              );
            }
            if (skill.skill === skillKind.OPS) {
              return (
                <Text key={key} fontSize="14px">
                  Operations
                </Text>
              );
            }
          })}
        </Flex>
      </Td>
      <Td>
        <Flex minW="full" direction={'column'} gap="0.7rem">
          {row?.skills.map((skill, key) => {
            if (skill.skill === skillKind.DEV) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.DESIGN) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.STRATEGY) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.VIDEO) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.WRITING) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.OPS) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
          })}
        </Flex>
      </Td>
      <Td>
        <div></div>
      </Td>
      <Td>
        <div></div>
      </Td>
      <Td>
        <div></div>
      </Td>
    </Tr>
  );
};

export const ExpandedRowMobile = ({ expandRow, row }: propsType) => {
  return (
    <Flex
      p="1rem"
      display={expandRow ? 'auto' : 'none'}
      bg="superteamBlack.800"
      width="100%"
    >
      <Flex
        width={'100%'}
        direction={'row'}
        alignItems="start"
        justify={'center'}
      >
        <Flex w="100%" direction={'column'} gap="0.6rem">
          {row?.skills.map((skill, key) => {
            if (skill.skill === skillKind.DEV) {
              return (
                <Text key={key} fontSize="14px">
                  Development
                </Text>
              );
            }
            if (skill.skill === skillKind.DESIGN) {
              return (
                <Text key={key} fontSize="14px">
                  Design
                </Text>
              );
            }
            if (skill.skill === skillKind.STRATEGY) {
              return (
                <Text key={key} fontSize="14px">
                  Strategy
                </Text>
              );
            }
            if (skill.skill === skillKind.VIDEO) {
              return (
                <Text key={key} fontSize="14px">
                  Videography
                </Text>
              );
            }
            if (skill.skill === skillKind.WRITING) {
              return (
                <Text key={key} fontSize="14px">
                  Writing
                </Text>
              );
            }
            if (skill.skill === skillKind.OPS) {
              return (
                <Text key={key} fontSize="14px">
                  Operations
                </Text>
              );
            }
          })}
        </Flex>
        <Flex w="100%" direction={'column'} gap="0.6rem">
          {row.skills.map((skill, key) => {
            if (skill.skill === skillKind.DEV) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.DESIGN) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.STRATEGY) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.VIDEO) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.WRITING) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.OPS) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamSurfacePrimaryLM'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
type projectPropsType = {
  expandRow: boolean;
  row: projectDataType;
};
export const ExpandedProjectRow = ({ expandRow, row }: projectPropsType) => {
  const bgColor = useColorModeValue(
    'superteamGreyLT.50',
    'superteamGreyDT.900'
  );
  const tableHeadingFontColor = useColorModeValue(
    'superteamGreyDT.400',
    'superteamGreyLT.800 '
  );
  return (
    <>
      <Tr display={expandRow ? 'auto' : 'none'}>
        <Td>
          <div></div>
        </Td>
        <Td>
          <Text color={tableHeadingFontColor} fontSize="14px">
            Name
          </Text>
        </Td>
        <Td>
          <Text color={tableHeadingFontColor} fontSize="14px">
            Role
          </Text>
        </Td>{' '}
        <Td>
          <Text color={tableHeadingFontColor} fontSize="14px">
            Skill
          </Text>
        </Td>
        <Td>
          <Text color={tableHeadingFontColor} fontSize="14px">
            XP
          </Text>
        </Td>
      </Tr>
      {row.members ? (
        row.members.map((member, index) => (
          <Tr key={index} display={expandRow ? 'auto' : 'none'} bg={bgColor}>
            <Td>
              <div></div>
            </Td>
            <Td>
              <Flex minW="full" direction={'column'}>
                <Text fontSize="14px">{member.name}</Text>
              </Flex>
            </Td>
            <Td>
              <Flex minW="full" direction={'column'} gap="0.7rem">
                {member.name === row.lead_name ? (
                  <Text fontSize="14px">Lead</Text>
                ) : (
                  <Text fontSize="14px">Member</Text>
                )}
              </Flex>
            </Td>
            <Td>
              <Flex
                minW="full"
                direction={'column'}
                gap="0.7rem"
                maxW={'fit-content'}
              >
                {member.skill.toLowerCase() === skillKind.DEV && (
                  <CustomChip text="Development" colorScheme="superteamGreen" />
                )}
                {member.skill.toLowerCase() === skillKind.DESIGN && (
                  <CustomChip text="Design" colorScheme="superteamBlue" />
                )}
                {member.skill.toLowerCase() === skillKind.STRATEGY && (
                  <CustomChip text="Strategy" colorScheme="superteamCyan" />
                )}
                {member.skill.toLowerCase() === skillKind.VIDEO && (
                  <CustomChip text="Video" colorScheme="superteamRed" />
                )}
                {member.skill.toLowerCase() === skillKind.WRITING && (
                  <CustomChip text="Writing" colorScheme="superteamPink" />
                )}
                {member.skill.toLowerCase() === skillKind.OPS && (
                  <CustomChip text="Operations" colorScheme="superteamYellow" />
                )}
              </Flex>
            </Td>
            <Td>
              <Flex w="7rem" flexDir="row" gap="0.4rem">
                <Text fontWeight="500" fontSize={'14px'}>
                  {Math.round(member.xp)}
                </Text>
                <CustomTag text="XP" />
              </Flex>
            </Td>
            <Td>
              <div></div>
            </Td>
          </Tr>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

const ProjectSkillsAndXpExpand = ({
  member,
  row,
}: {
  member: memberDetailsType;
  row: projectDataType;
}) => {
  return (
    <Flex
      onClick={(e) => {
        e.stopPropagation();
      }}
      direction="column"
      w="full"
      h="full"
      maxW="100%"
    >
      <Accordion variant={'unstyled'} allowToggle>
        <AccordionItem
          sx={{
            borderTopWidth: '0px',
            '&:last-of-type': {
              borderBottomWidth: '0px',
            },
          }}
        >
          <h2>
            <AccordionButton>
              <Flex w="full" justifyContent={'space-between'}>
                <Box>
                  <Text fontSize="12px">{member.name}</Text>
                </Box>
                <Box>
                  {member.name === row.lead_name ? (
                    <Text fontSize="12px">Lead</Text>
                  ) : (
                    <Text fontSize="12px">Member</Text>
                  )}
                </Box>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex justifyContent={'space-between'}>
              <Flex direction={'column'} gap="0.7rem" maxW={'fit-content'}>
                {member.skill.toLowerCase() === skillKind.DEV && (
                  <CustomChip text="Development" colorScheme="superteamGreen" />
                )}
                {member.skill.toLowerCase() === skillKind.DESIGN && (
                  <CustomChip text="Design" colorScheme="superteamBlue" />
                )}
                {member.skill.toLowerCase() === skillKind.STRATEGY && (
                  <CustomChip text="Strategy" colorScheme="superteamCyan" />
                )}
                {member.skill.toLowerCase() === skillKind.VIDEO && (
                  <CustomChip text="Video" colorScheme="superteamRed" />
                )}
                {member.skill.toLowerCase() === skillKind.WRITING && (
                  <CustomChip text="Writing" colorScheme="superteamPink" />
                )}
                {member.skill.toLowerCase() === skillKind.OPS && (
                  <CustomChip text="Operations" colorScheme="superteamYellow" />
                )}
              </Flex>
              <Box>
                <Flex flexDir="row" gap="0.4rem">
                  <Text fontWeight="500" fontSize={'14px'}>
                    {Math.round(member.xp)}
                  </Text>
                  <CustomTag text="XP" />
                </Flex>
              </Box>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export const ExpandedProjectRowMobile = ({
  expandRow,
  row,
}: projectPropsType) => {
  const bgColor = useColorModeValue(
    'superteamGreyLT.50',
    'superteamGreyDT.900'
  );

  return (
    <Flex direction="column" bg={bgColor} display={expandRow ? 'auto' : 'none'}>
      {row.members ? (
        row.members.map((member, index) => (
          <Flex
            px="4"
            direction="row"
            key={index}
            justifyContent="space-between"
          >
            <ProjectSkillsAndXpExpand member={member} row={row} />
          </Flex>
        ))
      ) : (
        <></>
      )}
    </Flex>
  );
};
