import {
  Box,
  Center,
  Flex,
  Icon,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { Inter } from '@next/font/google';
import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { xpType } from '../../../interfaces/xp';
import { projectDataType } from '../../../pages/projects';
import { SortByXp } from '../../../util/sortingData';
import CustomTag from '../../HOC/Tag.HOC';
import MedalSVG, { hideMedalOrder } from '../../Logo/MedalSVG';
import { ExpandedProjectRow, ExpandedRow } from './ExpandedRow';
import GraphColumn from './GraphColumn';
import RowCategories from './RowCategories';

type propTypes = {
  row: xpType;
  index: number;
  sortOrder: SortByXp;
  searchResult: boolean;
};
const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
});
const TableRow = ({ row, index, sortOrder, searchResult }: propTypes) => {
  const [expandRow, setExpandRow] = React.useState(false);

  const BackgroundColor = useColorModeValue(
    'superteamGreyLT.50',
    'superteamGreyDT.900'
  );

  return (
    <>
      <Tr
        bg={expandRow ? BackgroundColor : ''}
        _hover={{
          background: BackgroundColor,
        }}
        onClick={() => {
          setExpandRow((prevState) => !prevState);
        }}
        cursor={'pointer'}
        borderBottom="1px solid"
        borderColor={useColorModeValue(
          'superteamGreyLT.500',
          'superteamGreyDT.50'
        )}
      >
        <Td
          cursor=""
          width="2rem"
          padding="24px"
          color={useColorModeValue(
            'superteamGreyLT.700',
            'superteamGreyDT.500'
          )}
        >
          <div>
            <MedalSVG
              index={index + 1}
              showIndex={searchResult || hideMedalOrder.includes(sortOrder)}
            />
          </div>
        </Td>
        <Td padding="18px">
          <Flex flexDir={'column'} w="13rem">
            <Text
              color={useColorModeValue(
                'superteamBlack.100',
                'superteamSurfacePrimaryLM.100'
              )}
              fontSize={'14px'}
              textTransform="capitalize"
              fontWeight="500"
              className={inter.className}
            >
              {row?.name.split('#')[0]}
            </Text>
            <Text
              color={useColorModeValue(
                'superteamGreyLT.800',
                'superteamGreyDT.100'
              )}
              opacity="0.8"
              fontSize={'12px'}
            >
              {row?.name}
            </Text>
          </Flex>
        </Td>
        <Td>
          <Flex h={10} w="7rem" flexDir="row" gap="0.4rem">
            <Text
              fontWeight="500"
              className={inter.className}
              color={useColorModeValue(
                'superteamBlack.100',
                'superteamSurfacePrimaryLM.100'
              )}
              fontSize={'14px'}
            >
              {Math.round(row?.total_amount)}
            </Text>
            <CustomTag text="XP" />
          </Flex>
        </Td>
        <Td w="12rem">
          <Box w="8rem">
            <GraphColumn row={row} />
          </Box>
        </Td>
        <Td>
          <RowCategories row={row} />
        </Td>
        <Td>
          <Center
            rounded={'full'}
            transition="background 0.4s ease"
            _hover={{
              background: useColorModeValue(
                'superteamGreyLT.300',
                'superteamGreyDT.800'
              ),
            }}
          >
            <Icon
              cursor={'pointer'}
              as={FiChevronDown}
              w={6}
              h={6}
              color={useColorModeValue(
                'superteamGreyLT.700',
                'superteamGreyDT.100'
              )}
            />
          </Center>
        </Td>
      </Tr>
      <ExpandedRow expandRow={expandRow} row={row} />
    </>
  );
};

type projectPropsType = {
  row: projectDataType;
  index: number;
  sortOrder: any;
  searchResult: any;
};

export const ProjectsTableRow = ({
  row,
  index,
  sortOrder,
  searchResult,
}: projectPropsType) => {
  const [expandRow, setExpandRow] = React.useState(false);

  const BackgroundColor = useColorModeValue(
    'superteamGreyLT.50',
    'superteamGreyDT.900'
  );

  return (
    <>
      <Tr
        bg={expandRow ? BackgroundColor : ''}
        _hover={{
          background: BackgroundColor,
        }}
        onClick={() => {
          setExpandRow((prevState) => !prevState);
        }}
        cursor={'pointer'}
        borderBottom="1px solid"
        borderColor={useColorModeValue(
          'superteamGreyLT.500',
          'superteamGreyDT.50'
        )}
      >
        <Td
          cursor=""
          padding="24px"
          color={useColorModeValue(
            'superteamGreyLT.700',
            'superteamGreyDT.500'
          )}
        >
          {index + 1}
        </Td>
        <Td padding="18px">
          <Flex flexDir={'column'} w="13rem">
            <Text
              color={useColorModeValue(
                'superteamBlack.100',
                'superteamSurfacePrimaryLM.100'
              )}
              fontSize={'14px'}
              textTransform="capitalize"
              fontWeight="500"
              className={inter.className}
            >
              {row?.project_name}
            </Text>
          </Flex>
        </Td>
        <Td>
          <Flex flexDir="row" gap="0.4rem">
            <Text
              fontWeight="500"
              className={inter.className}
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
        </Td>
        <Td w={'50rem'} padding="18px">
          <Flex flexDir={'column'} w="13rem">
            <Text
              color={useColorModeValue(
                'superteamBlack.100',
                'superteamSurfacePrimaryLM.100'
              )}
              fontSize={'14px'}
              textTransform="capitalize"
              fontWeight="500"
              className={inter.className}
            >
              {row?.lead_name}
            </Text>
          </Flex>
        </Td>
        <Td w="1.2rem"></Td>
        <Td>
          <Center
            rounded={'full'}
            transition="background 0.4s ease"
            _hover={{
              background: useColorModeValue(
                'superteamGreyLT.300',
                'superteamGreyDT.800'
              ),
            }}
          >
            <Icon
              cursor={'pointer'}
              as={FiChevronDown}
              w={6}
              h={6}
              color={useColorModeValue(
                'superteamGreyLT.700',
                'superteamGreyDT.100'
              )}
            />
          </Center>
        </Td>
      </Tr>
      {/*@ts-ignore*/}
      <ExpandedProjectRow expandRow={expandRow} row={row} />
    </>
  );
};

export default TableRow;
