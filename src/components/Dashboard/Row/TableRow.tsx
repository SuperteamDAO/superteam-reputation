import * as React from 'react';
import { Td, Tr, Text, Flex, Icon, Center } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import CustomTag from '../../HOC/Tag.HOC';
import RowCategories from './RowCategories';
import { ExpandedRow } from './ExpandedRow';
import { xpTableType } from '../../../interfaces/xpTable';
import MedalSVG from '../../Logo/MedalSVG';
import GraphColumn from './GraphColumn';

type propTypes = {
  row: xpTableType;
  index: number;
  searching: boolean;
};

const TableRow = ({ row, index, searching }: propTypes) => {
  const [expandRow, setExpandRow] = React.useState(false);
  return (
    <>
      <Tr
        bg={expandRow ? 'superteam_black.800' : ''}
        _hover={{
          background: 'superteam_black.800',
        }}
        onClick={() => {
          setExpandRow((prevState) => !prevState);
        }}
        cursor={'pointer'}
        borderBottom="1px solid"
        borderColor="superteam_black.200"
      >
        <Td cursor="" width="2rem" padding="24px">
          {index + 1 <= 3 ? (
            searching ? (
              ` ${index + 1}.`
            ) : (
              <MedalSVG index={index + 1} />
            )
          ) : (
            ` ${index + 1}.`
          )}
        </Td>
        <Td padding="18px">
          <Text
            color={'superteam_white'}
            fontSize={'14px'}
            textTransform="capitalize"
          >
            {row.name.split('#')[0]}
          </Text>
          <Text color="superteam_gray.500" fontSize={'12px'}>
            {row.name}
          </Text>
        </Td>
        <Td>
          <Flex h={10} flexDir="row" gap="0.4rem">
            <Text color={'superteam_white'} fontSize={'14px'}>
              {Math.round(row.total_xp)}
            </Text>
            <CustomTag colorScheme={'superteam_gray'} text="XP" />
          </Flex>
        </Td>
        <Td>
          <GraphColumn />
        </Td>
        <Td>
          <RowCategories row={row} />
        </Td>
        <Td>
          <Center
            rounded={'full'}
            transition="background 0.4s ease"
            _hover={{
              background: 'superteam_black.700',
            }}
          >
            <Icon
              cursor={'pointer'}
              as={FiChevronDown}
              w={6}
              h={6}
              color={'superteam_gray.600'}
            />
          </Center>
        </Td>
      </Tr>
      <ExpandedRow expandRow={expandRow} row={row} />
    </>
  );
};

export default TableRow;
