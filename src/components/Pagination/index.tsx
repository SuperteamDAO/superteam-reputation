import { Center, Icon, Stack, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { DOTS, usePagination } from '../../hooks/usePagination';
import { IPagination } from './pagination';
{
  /*
   * @params
   * totalCount - represents the total count of data available from the source.
   * currentPage - represents the current active page. We'll use a 1-based index instead of a traditional 0-based index for our currentPage value.
   * pageSize - represents the maximum data that is visible in a single page.
   * onPageChange - callback function invoked with the updated page value when the page is changed.
   * siblingCount (optional): represents the min number of page buttons to be shown on each side of the current page button. Defaults to 1.
   */
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}: IPagination) => {
  const [disableNext, setDisableNext] = React.useState(false);
  const [disablePrev, setDisablePrev] = React.useState(false);
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const SelectedBorderColor = useColorModeValue(
    'superteamGreyLT.800',
    'superteamGreyLT.400'
  );
  const SelectedColor = useColorModeValue(
    'superteamGreyDT.600',
    'superteamGreyLT.200'
  );
  const NotSelectedColor = useColorModeValue(
    'superteamGreyDT.500',
    'superteamGreyLT.100'
  );
  const borderColor = useColorModeValue(
    'superteamGreyLT.500',
    'superteamGreyDT.50'
  );
  const dotsColor = useColorModeValue(
    'superteamGreyDT.200',
    'superteamGreyLT.200 '
  );
  const backgroundColor = useColorModeValue(
    'superteamGreyLT.100',
    'superteamGreyDT.900 '
  );
  let lastPage = paginationRange[paginationRange.length - 1];

  useEffect(() => {
    if (lastPage === currentPage) {
      setDisableNext(true);
      setDisablePrev(false);
    } else if (currentPage === 1) {
      setDisablePrev(true);
      setDisableNext(false);
    } else {
      setDisableNext(false);
      setDisablePrev(false);
    }
  }, [lastPage, currentPage]);

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage === lastPage) {
      return;
    }
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) {
      return;
    }
    onPageChange(currentPage - 1);
  };

  return (
    <Stack direction={'row'}>
      <Center
        border={'1px solid'}
        borderColor={borderColor}
        h="2.6rem"
        w="2.6rem"
        rounded="4px"
        fontWeight="600"
        background={backgroundColor}
        as="button"
        onClick={onPrevious}
        disabled={disablePrev}
        _disabled={{
          opacity: '0.3',
          cursor: 'not-allowed! important',
        }}
        _hover={{
          background: borderColor,
        }}
      >
        <Icon w={8} h={8} color={SelectedColor} as={BiChevronLeft} />
      </Center>
      {paginationRange?.map(
        (
          pageNumber:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | null
            | undefined,
          key: number
        ) => {
          if (pageNumber === DOTS) {
            return (
              <Center
                border={'1px solid'}
                background={backgroundColor}
                color={dotsColor}
                borderColor={borderColor}
                rounded="4px"
                h="2.6rem"
                w="2.6rem"
                fontWeight="600"
                key={key}
              >
                &#8230;
              </Center>
            );
          }
          return (
            <Center
              border={'1px solid'}
              borderColor={
                currentPage === pageNumber ? SelectedBorderColor : borderColor
              }
              color={
                currentPage === pageNumber ? SelectedColor : NotSelectedColor
              }
              fontWeight="400"
              background={'transparent'}
              p="0.5rem"
              h="2.6rem"
              w="2.6rem"
              rounded="4px"
              as="button"
              fontSize="lg"
              key={key}
              onClick={() => onPageChange(pageNumber)}
              _hover={{
                background: borderColor,
              }}
            >
              {pageNumber}
            </Center>
          );
        }
      )}
      <Center
        border={'1px solid'}
        borderColor={borderColor}
        h="2.6rem"
        w="2.6rem"
        rounded="4px"
        fontWeight="600"
        background={backgroundColor}
        as="button"
        onClick={onNext}
        disabled={disableNext}
        _disabled={{
          opacity: '0.5',
          cursor: 'not-allowed! important',
        }}
        _hover={{
          background: borderColor,
        }}
      >
        <Icon w={8} h={8} color={SelectedColor} as={BiChevronRight} />
      </Center>
    </Stack>
  );
};

export default Pagination;
