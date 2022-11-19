import * as React from 'react';
import { Tr, Text, Flex, Icon, Center } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import CustomTag from '../../HOC/Tag.HOC';
import RowCategories from './RowCategories';
import { xpTableType } from '../../../interfaces/xpTable';
import { ExpandedRowMobile } from './ExpandedRow';
import MedalSVG from '../../Logo/MedalSVG';
import GraphColumn from './GraphColumn';

type propTypes = {
  row: xpTableType;
  index: number;
  searching: boolean;
};

const TableRowMobile = ({ row, index, searching }: propTypes) => {
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
      onClick={() => {
        setExpandRow((prevState) => !prevState);
      }}
      _hover={{
        background: 'superteam_black.800',
      }}
    >
      <Flex p="1.2rem" w="100%" gap="2rem" direction="row">
        {index + 1 <= 3 ? (
          searching ? (
            ` ${index + 1}.`
          ) : (
            <MedalSVG index={index + 1} />
          )
        ) : (
          ` ${index + 1}.`
        )}
        <Flex gap="0.3rem" direction="column">
          <Text color="white" fontSize={'14px'} textTransform="capitalize">
            {row.name.split('#')[0]}
          </Text>
          <Text color="rgba(121, 155, 190, 0.47)" fontSize={'12px'}>
            {row.name}
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
            {Math.round(row.total_xp)}
          </Text>
          <CustomTag colorScheme={'gray'} text="XP" />
        </Flex>
        <Flex
          maxW={'14rem'}
          // transform={{ base: 'translateX(-1rem)', sm: 'translateX(-3rem)' }}
        >
          <GraphColumn />
        </Flex>
      </Flex>
      <ExpandedRowMobile expandRow={expandRow} row={row} />
    </Tr>
  );
};

export default TableRowMobile;
