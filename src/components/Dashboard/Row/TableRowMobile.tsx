import { Center, Flex, Icon, Text, Tr } from '@chakra-ui/react';
import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { xpType } from '../../../interfaces/xp';
import CustomTag from '../../HOC/Tag.HOC';
import MedalSVG from '../../Logo/MedalSVG';
import { ExpandedRowMobile } from './ExpandedRow';
import GraphColumn from './GraphColumn';
import RowCategories from './RowCategories';

type propTypes = {
  row: xpType;
  index: number;
  searching: boolean;
  searchResult: boolean;
};

const TableRowMobile = ({ row, index, searching, searchResult }: propTypes) => {
  const [expandRow, setExpandRow] = React.useState(false);
  return (
    <Tr
      bg={expandRow ? '#1B1F27' : ''}
      width="100%"
      borderBottom="1px solid rgba(121, 155, 190, 0.2)"
      onDragEnd={() => {}}
      onTouchEndCapture={() => {
        setExpandRow((prevState) => !prevState);
      }}
      _hover={{
        background: 'superteamBlack.800',
      }}
    >
      <Flex p="1.2rem" w="100%" gap="2rem" direction="row">
        {searchResult ? (
          ` ${index + 1}.`
        ) : index + 1 <= 3 ? (
          <MedalSVG index={index + 1} />
        ) : (
          ` ${index + 1}.`
        )}
        <Flex gap="0.3rem" direction="column">
          <Text color="white" fontSize={'14px'} textTransform="capitalize">
            {row?.name.split('#')[0]}
          </Text>
          <Text color="rgba(121, 155, 190, 0.47)" fontSize={'12px'}>
            {row?.name}
          </Text>
        </Flex>{' '}
        <Center ml="auto" alignItems="top">
          <Icon
            cursor={'pointer'}
            as={FiChevronDown}
            w={6}
            h={6}
            color={'rgba(121, 155, 190, 0.2)'}
          />
        </Center>
      </Flex>
      <RowCategories row={row} />
      <Flex justify={'start'} p="1rem" w="full" gap="2rem">
        <Flex p="0px !important" h={10} flexDir="row" gap="0.4rem">
          <Text color="white" fontSize={'14px'}>
            {Math.round(row?.total_amount)}
          </Text>
          <CustomTag colorScheme={'gray'} text="XP" />
        </Flex>
        <Flex
          maxW={'14rem'}
          // transform={{ base: 'translateX(-1rem)', sm: 'translateX(-3rem)' }}
        >
          <GraphColumn row={row} />
        </Flex>
      </Flex>
      <ExpandedRowMobile expandRow={expandRow} row={row} />
    </Tr>
  );
};

export default TableRowMobile;
