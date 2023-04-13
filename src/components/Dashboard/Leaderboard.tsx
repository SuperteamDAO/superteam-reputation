import {
  Center,
  Container,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import * as React from 'react';
import { xpType } from '../../interfaces/xp';
import { projectDataType } from '../../pages/projects';
import { SortByXp } from '../../util/sortingData';
import Pagination from '../Pagination';
import TableRow, { ProjectsTableRow } from './Row/TableRow';
import TableRowMobile, { ProjectsTableRowMobile } from './Row/TableRowMobile';
//import XPGraph from './graph';

type propsType = {
  row: (xpType | undefined)[];
  // eslint-disable-next-line no-undef
  sortOrder: SortByXp;
  searchResult: boolean;
};

export default function EnhancedTable({
  row,
  sortOrder,
  searchResult,
}: propsType) {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [isSmallerThan990] = useMediaQuery('(max-width: 990px)');

  const PageSize = 15;

  const rows = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const arr = row.slice(firstPageIndex, lastPageIndex);
    return arr as xpType[];
  }, [currentPage, row]);

  // rows.sort((a: xpType, b: xpType) => {
  //   if (a?.total_amount > b?.total_amount) {
  //     return -1;
  //   }
  //   if (a?.total_amount < b?.total_amount) {
  //     return 1;
  //   }
  //   return 0;
  // });

  const TheadBGColor = useColorModeValue(
    'superteamGreyLT.50',
    'superteamGreyDT.900'
  );
  const TableBorderColor = useColorModeValue(
    'superteamSurfacePrimaryLM',
    'superteamGreyDT.900'
  );
  const borderColor = useColorModeValue(
    'superteamGreyLT.500',
    'superteamGreyDT.50'
  );
  const textColor = useColorModeValue(
    'superteamGreyLT.200',
    'superteamGreyLT.200 '
  );
  const tableHeadingFontColor = useColorModeValue(
    'superteamGreyDT.400',
    'superteamGreyLT.800 '
  );

  return (
    <>
      <Container
        fontFamily={'Inter'}
        maxW="7xl"
        p="0"
        mt={'1.6rem'}
        rounded="6px"
      >
        {searchResult && (
          <HStack mb={'1.6rem'}>
            <Text>Found</Text>
            <Text color="superteamGray.300">{row.length} results</Text>
          </HStack>
        )}
        <TableContainer>
          <Table variant="unstyled">
            {!isSmallerThan990 && (
              <Thead
                border="1px solid"
                borderColor={TableBorderColor}
                borderBottomColor={borderColor}
                borderTopRadius="6px"
                bg={TheadBGColor}
                borderRadius={'10px'}
                roundedTop="md"
              >
                <Tr>
                  <Th
                    padding="12px"
                    textTransform={'capitalize'}
                    fontWeight="500"
                    fontSize={'14px'}
                    color={tableHeadingFontColor}
                  >
                    Rank
                  </Th>
                  <Th
                    textTransform={'capitalize'}
                    fontWeight="500"
                    fontSize={'14px'}
                    color={tableHeadingFontColor}
                  >
                    Name
                  </Th>
                  <Th
                    textTransform={'capitalize'}
                    fontWeight="500"
                    fontSize={'14px'}
                    color={tableHeadingFontColor}
                  >
                    Total
                  </Th>
                  <Th
                    textTransform={'capitalize'}
                    fontWeight="500"
                    fontSize={'14px'}
                    color={tableHeadingFontColor}
                  >
                    XP Growth
                  </Th>
                  <Th
                    w="full"
                    textTransform={'capitalize'}
                    fontWeight="500"
                    fontSize={'14px'}
                    color={tableHeadingFontColor}
                  >
                    Categories
                  </Th>
                  <Th w="1.2rem"></Th>
                </Tr>
              </Thead>
            )}
            <Tbody
              border="1px solid"
              borderColor={useColorModeValue(
                'superteamGreyLT.500',
                'superteamGreyDT.50'
              )}
            >
              {rows.map((row: any, key: number) =>
                isSmallerThan990 ? (
                  <TableRowMobile
                    row={row}
                    key={key}
                    index={(currentPage - 1) * 15 + key}
                    sortOrder={sortOrder}
                    searchResult={searchResult}
                  />
                ) : (
                  <TableRow
                    row={row}
                    key={key}
                    index={(currentPage - 1) * 15 + key}
                    sortOrder={sortOrder}
                    searchResult={searchResult}
                  />
                )
              )}
            </Tbody>
          </Table>
        </TableContainer>
        {rows.length === 0 && (
          <Center
            height={'60vh'}
            w="100%"
            borderWidth="0px 1px 1px 1px"
            borderColor={borderColor}
            flexDir={'column'}
            gap="1rem"
            textAlign={'center'}
          >
            <Center>
              <svg
                width="117"
                height="117"
                viewBox="0 0 117 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.18"
                  cx="58.5"
                  cy="58.5"
                  r="58.5"
                  fill="#799BBE"
                  fillOpacity="0.47"
                />
                <rect
                  x="34.3293"
                  y="41.6857"
                  width="31.8772"
                  height="34.3293"
                  rx="1.5"
                  fill="#799BBE"
                  fillOpacity="0.47"
                />
                <rect
                  opacity="0.3"
                  x="71.1106"
                  y="41.6857"
                  width="12.2605"
                  height="34.3293"
                  rx="1"
                  fill="#799BBE"
                  fillOpacity="0.47"
                />
              </svg>
            </Center>
            <Text fontWeight="500" fontSize="18px" color={textColor}>
              404 Nothing Found
            </Text>
            <Text maxW="26rem" fontWeight="400" fontSize="17px">
              XP system helps us understand who did what when and why this is{' '}
            </Text>
          </Center>
        )}
      </Container>
      <Center alignItems={'start'} justifyContent="start" py="2rem">
        <Pagination
          onPageChange={(page: number) => {
            setCurrentPage(page);
          }}
          siblingCount={0}
          currentPage={currentPage}
          totalCount={row.length}
          pageSize={PageSize}
        />
      </Center>
    </>
  );
}

type projectPropsDataType = {
  row: projectDataType[];
  searchResult: any;
  sortOrder: any;
};

export function ProjectsTable({
  row,
  searchResult,
  sortOrder,
}: projectPropsDataType) {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [isSmallerThan990] = useMediaQuery('(max-width: 990px)');
  const PageSize = 15;
  const rows = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const arr = row.slice(firstPageIndex, lastPageIndex);
    return arr;
  }, [currentPage, row]);

  const TheadBGColor = useColorModeValue(
    'superteamGreyLT.50',
    'superteamGreyDT.900'
  );
  const TableBorderColor = useColorModeValue('white', 'superteamGreyDT.900');
  const borderColor = useColorModeValue(
    'superteamGreyLT.500',
    'superteamGreyDT.50'
  );
  const textColor = useColorModeValue(
    'superteamGreyLT.200',
    'superteamGreyLT.200 '
  );
  const tableHeadingFontColor = useColorModeValue(
    'superteamGreyDT.400',
    'superteamGreyLT.800 '
  );

  return (
    <Container maxW={'7xl'} px="0" py="3rem">
      <HStack maxW={'full'} justifyContent="space-between">
        <Text fontWeight={'600'}>Projects XP</Text>
      </HStack>
      <Container
        fontFamily={'Inter'}
        maxW="7xl"
        p="0"
        mt={'1.6rem'}
        rounded="6px"
      >
        {searchResult && (
          <HStack mb={'1.6rem'}>
            <Text>Found</Text>
            <Text color="superteamGray.300">{row.length} results</Text>
          </HStack>
        )}
        {isSmallerThan990 &&
          rows.map((row: any, key: number) => {
            return (
              <ProjectsTableRowMobile
                key={key}
                index={(currentPage - 1) * 15 + key}
                row={row}
                sortOrder={sortOrder}
                searchResult={searchResult}
              />
            );
          })}
        {!isSmallerThan990 && (
          <TableContainer>
            <Table w="full" variant="unstyled">
              {!isSmallerThan990 && (
                <Thead
                  border="1px solid"
                  borderColor={TableBorderColor}
                  borderBottomColor={borderColor}
                  borderTopRadius="6px"
                  bg={TheadBGColor}
                  borderRadius={'10px'}
                  roundedTop="md"
                >
                  <Tr>
                    <Th
                      padding="12px"
                      textTransform={'capitalize'}
                      fontWeight="500"
                      fontSize={'14px'}
                      color={tableHeadingFontColor}
                    ></Th>
                    <Th
                      width={'30rem'}
                      maxWidth="30rem"
                      textTransform={'capitalize'}
                      fontWeight="500"
                      fontSize={'14px'}
                      color={tableHeadingFontColor}
                    >
                      Name
                    </Th>
                    <Th
                      textTransform={'capitalize'}
                      fontWeight="500"
                      fontSize={'14px'}
                      color={tableHeadingFontColor}
                    >
                      Total XP
                    </Th>
                    <Th
                      textTransform={'capitalize'}
                      fontWeight="500"
                      fontSize={'14px'}
                      color={tableHeadingFontColor}
                    >
                      Project Lead
                    </Th>
                    <Th w="1.2rem"></Th>
                    <Th w="1.2rem"></Th>
                  </Tr>
                </Thead>
              )}
              <Tbody
                border="1px solid"
                // eslint-disable-next-line react-hooks/rules-of-hooks
                borderColor={useColorModeValue(
                  'superteamGreyLT.500',
                  'superteamGreyDT.50'
                )}
              >
                {rows.map((row: any, key: number) => {
                  return (
                    <ProjectsTableRow
                      row={row}
                      key={key}
                      index={(currentPage - 1) * 15 + key}
                      sortOrder={sortOrder}
                      searchResult={searchResult}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}

        {rows.length === 0 && (
          <Center
            height={'60vh'}
            w="100%"
            borderWidth="0px 1px 1px 1px"
            borderColor={borderColor}
            flexDir={'column'}
            gap="1rem"
            textAlign={'center'}
          >
            <Center>
              <svg
                width="117"
                height="117"
                viewBox="0 0 117 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.18"
                  cx="58.5"
                  cy="58.5"
                  r="58.5"
                  fill="#799BBE"
                  fillOpacity="0.47"
                />
                <rect
                  x="34.3293"
                  y="41.6857"
                  width="31.8772"
                  height="34.3293"
                  rx="1.5"
                  fill="#799BBE"
                  fillOpacity="0.47"
                />
                <rect
                  opacity="0.3"
                  x="71.1106"
                  y="41.6857"
                  width="12.2605"
                  height="34.3293"
                  rx="1"
                  fill="#799BBE"
                  fillOpacity="0.47"
                />
              </svg>
            </Center>
            <Text fontWeight="500" fontSize="18px" color={textColor}>
              404 Nothing Found
            </Text>
            <Text maxW="26rem" fontWeight="400" fontSize="17px">
              XP system helps us understand who did what when and why this is{' '}
            </Text>
          </Center>
        )}
      </Container>
      <Center alignItems={'start'} justifyContent="start" py="2rem">
        <Pagination
          onPageChange={(page: number) => {
            setCurrentPage(page);
          }}
          siblingCount={0}
          currentPage={currentPage}
          totalCount={row.length}
          pageSize={PageSize}
        />
      </Center>
    </Container>
  );
}
