import { Flex, Td, Text, Tr } from '@chakra-ui/react';
import { xpTableType } from '../../../interfaces/xpTable';
import CustomTag from '../../HOC/Tag.HOC';

type propsType = {
  expandRow: boolean;
  row: xpTableType;
};

export const ExpandedRow = ({ expandRow, row }: propsType) => {
  return (
    <Tr
      display={expandRow ? 'auto' : 'none'}
      bg="#1B1F27"
      borderBottom="1px solid "
      borderColor={'superteamBlack.200'}
    >
      <Td>
        <div></div>
      </Td>
      <Td>
        <Flex minW="full" direction={'column'} gap="0.7rem">
          {row.dev_xp > 0 && <Text fontSize="14px">Development</Text>}
          {row.design_xp > 0 && <Text fontSize="14px">Design</Text>}
          {row.strategy_xp > 0 && <Text fontSize="14px">Strategy</Text>}{' '}
          {row.video_xp > 0 && <Text fontSize="14px">Videography</Text>}{' '}
          {row.writing_xp > 0 && <Text fontSize="14px">Writing</Text>}{' '}
          {row.ops_xp > 0 && <Text fontSize="14px">Operations</Text>}
        </Flex>
      </Td>
      <Td>
        <Flex minW="full" direction={'column'} gap="0.7rem">
          {row.dev_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color={'superteamWhite'} fontSize={'14px'}>
                {Math.round(row.dev_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}
          {row.design_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color={'superteamWhite'} fontSize={'14px'}>
                {Math.round(row.design_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}
          {row.strategy_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color={'superteamWhite'} fontSize={'14px'}>
                {Math.round(row.strategy_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}{' '}
          {row.video_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color={'superteamWhite'} fontSize={'14px'}>
                {Math.round(row.video_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}{' '}
          {row.writing_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color={'superteamWhite'} fontSize={'14px'}>
                {Math.round(row.writing_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}{' '}
          {row.ops_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color={'superteamWhite'} fontSize={'14px'}>
                {Math.round(row.ops_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}
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
          {row.dev_xp > 0 && <Text fontSize="14px">Development</Text>}
          {row.design_xp > 0 && <Text fontSize="14px">Design</Text>}
          {row.strategy_xp > 0 && <Text fontSize="14px">Strategy</Text>}{' '}
          {row.video_xp > 0 && <Text fontSize="14px">Videography</Text>}{' '}
          {row.writing_xp > 0 && <Text fontSize="14px">Writing</Text>}{' '}
          {row.ops_xp > 0 && <Text fontSize="14px">Operations</Text>}
        </Flex>
        <Flex w="100%" direction={'column'} gap="0.6rem">
          {row.dev_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color="superteamWhite" fontSize={'14px'}>
                {Math.round(row.dev_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}
          {row.design_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color={'superteamWhite'} fontSize={'14px'}>
                {Math.round(row.design_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}
          {row.strategy_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color={'superteamWhite'} fontSize={'14px'}>
                {Math.round(row.strategy_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}{' '}
          {row.video_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color={'superteamWhite'} fontSize={'14px'}>
                {Math.round(row.video_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}{' '}
          {row.writing_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color={'superteamWhite'} fontSize={'14px'}>
                {Math.round(row.writing_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}{' '}
          {row.ops_xp > 0 && (
            <Flex flexDir="row" gap="0.4rem">
              <Text color={'superteamWhite'} fontSize={'14px'}>
                {Math.round(row.ops_xp)}
              </Text>
              <CustomTag colorScheme={'superteamGray'} text="XP" />
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
