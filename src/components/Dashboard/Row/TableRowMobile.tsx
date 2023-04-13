import {
  Box,
  Center,
  Flex,
  Icon,
  Text,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { xpType } from '../../../interfaces/xp';
import { projectDataType } from '../../../pages/projects';
import { SortByXp } from '../../../util/sortingData';
import CustomTag from '../../HOC/Tag.HOC';
import MedalSVG, { hideMedalOrder } from '../../Logo/MedalSVG';
import { ExpandedProjectRowMobile, ExpandedRowMobile } from './ExpandedRow';
import GraphColumn from './GraphColumn';
import RowCategories from './RowCategories';

type propTypes = {
  row: xpType;
  index: number;
  sortOrder: SortByXp;
  searchResult: boolean;
};

const TableRowMobile = ({ row, index, sortOrder, searchResult }: propTypes) => {
  const [expandRow, setExpandRow] = React.useState(false);
  return (
    <Tr
      bg={expandRow ? '#1B1F27' : ''}
      width="100%"
      borderBottom="1px solid rgba(121, 155, 190, 0.2)"
      onDragEnd={() => {}}
      onClick={() => {
        setExpandRow((prevState) => !prevState);
      }}
      _hover={{
        background: 'superteamBlack.800',
      }}
    >
      <Flex p="1.2rem" w="100%" gap="2rem" direction="row">
        <MedalSVG
          index={index + 1}
          showIndex={searchResult || hideMedalOrder.includes(sortOrder)}
        />
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

type projectPropsType = {
  row: projectDataType;
  index: number;
  sortOrder: any;
  searchResult: any;
};

export const ProjectsTableRowMobile = ({
  index,
  row,
  searchResult,
  sortOrder,
}: projectPropsType) => {
  const [expandRow, setExpandRow] = React.useState(false);
  const BackgroundColor = useColorModeValue(
    'superteamGreyLT.50',
    'superteamGreyDT.900'
  );
  return (
    <Box
      border="1px solid"
      borderColor={useColorModeValue(
        'superteamGreyLT.500',
        'superteamGreyDT.50'
      )}
      mx="2"
      bg={expandRow ? BackgroundColor : ''}
      onDragEnd={() => {}}
      onClick={() => {
        setExpandRow((prevState) => !prevState);
      }}
      _hover={{
        background: 'superteamBlack.800',
      }}
    >
      <Flex p="1.2rem" gap="2rem" direction="row">
        <Text
          padding="5px"
          color={useColorModeValue(
            'superteamGreyLT.700',
            'superteamGreyDT.500'
          )}
        >
          {index + 1}
        </Text>
        <Flex flex="1" gap="0.3rem" direction="column">
          <Flex justifyContent={'space-between'}>
            <Text
              as="p"
              sx={{
                whiteSpace: 'break-spaces',
              }}
              color={useColorModeValue(
                'superteamBlack.100',
                'superteamSurfacePrimaryLM.100'
              )}
              fontSize={'14px'}
              textTransform="capitalize"
            >
              {row?.project_name}
            </Text>
            <Flex flexDir="row" gap="0.4rem">
              <Text
                fontWeight="500"
                color={useColorModeValue(
                  'superteamBlack.100',
                  'superteamSurfacePrimaryLM.100'
                )}
                fontSize={'14px'}
              >
                {Math.round(row?.total_xp)}
              </Text>
              <CustomTag text="XP" />
            </Flex>
          </Flex>

          <Text color="rgba(121, 155, 190, 0.47)" fontSize={'12px'}>
            {row?.lead_name}
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
      <ExpandedProjectRowMobile expandRow={expandRow} row={row} />
    </Box>
  );
};
export default TableRowMobile;
