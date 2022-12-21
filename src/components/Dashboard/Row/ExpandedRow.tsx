import { Flex, Td, Text, Tr, useColorModeValue } from '@chakra-ui/react';
import { skillKind } from '../../../enums/skill';
import { xpType } from '../../../interfaces/xp';
import { projectDataType } from '../../../pages/projects';
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
        <Flex minW="full" direction={'column'} gap="0.7rem">
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
                  <Text color={'superteamWhite'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.DESIGN) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamWhite'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.STRATEGY) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamWhite'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.VIDEO) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamWhite'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.WRITING) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamWhite'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.OPS) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamWhite'} fontSize={'14px'}>
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
                  <Text color={'superteamWhite'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.DESIGN) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamWhite'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.STRATEGY) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamWhite'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.VIDEO) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamWhite'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.WRITING) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamWhite'} fontSize={'14px'}>
                    {Math.round(skill.amount)}
                  </Text>
                  <CustomTag colorScheme={'superteamGray'} text="XP" />
                </Flex>
              );
            }
            if (skill.skill === skillKind.OPS) {
              return (
                <Flex flexDir="row" gap="0.4rem" key={key}>
                  <Text color={'superteamWhite'} fontSize={'14px'}>
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
  return row.members ? (
    row.members.map((member, index) => (
      <Tr key={index} display={expandRow ? 'auto' : 'none'} bg={bgColor}>
        <Td>
          <div></div>
        </Td>
        <Td>
          <Flex minW="full" direction={'column'} gap="0.7rem">
            <Text fontSize="14px">{member.name}</Text>
          </Flex>
        </Td>
        <Td>
          <Flex minW="full" direction={'column'} gap="0.7rem">
            {' '}
            <Text fontSize="14px">{member.xp}</Text>
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
              <CustomChip text="Design" colorScheme="superteamBlueDT" />
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
          <div></div>
        </Td>
      </Tr>
    ))
  ) : (
    <></>
  );
};
