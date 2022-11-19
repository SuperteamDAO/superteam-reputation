import { Icon, Stack, Center } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { usePagination, DOTS } from '../../hooks/usePagination';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
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

  let lastPage = paginationRange[paginationRange.length - 1];

  useEffect(() => {
    if (lastPage === currentPage) {
      console.log('next disabled');
      setDisableNext(true);
      setDisablePrev(false);
    } else if (currentPage === 1) {
      console.log('prev disabled');
      setDisablePrev(true);
      setDisableNext(false);
    } else {
      console.log('both enabled');
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
        borderColor="superteam_black.200"
        h="2.6rem"
        w="2.6rem"
        rounded="4px"
        fontWeight="600"
        background="superteam_black.800"
        as="button"
        onClick={onPrevious}
        disabled={disablePrev}
        _disabled={{
          opacity: '0.5',
          cursor: 'not-allowed! important',
        }}
        _hover={{
          background: 'superteam_black.200',
        }}
      >
        <Icon w={8} h={8} color="superteam_white" as={BiChevronLeft} />
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
                background="superteam_black.900"
                color="superteam_gray.600"
                borderColor="superteam_black.200"
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
                currentPage === pageNumber
                  ? 'superteam_blue.900'
                  : 'superteam_black.200'
              }
              color={
                currentPage === pageNumber
                  ? 'superteam_blue.900'
                  : 'superteam_gray.600'
              }
              fontWeight="600"
              background="superteam_black.900"
              p="0.5rem"
              h="2.6rem"
              w="2.6rem"
              rounded="4px"
              as="button"
              fontSize="lg"
              key={key}
              onClick={() => onPageChange(pageNumber)}
              _hover={{
                background: 'superteam_black.200',
              }}
            >
              {pageNumber}
            </Center>
          );
        }
      )}
      <Center
        border={'1px solid'}
        borderColor="superteam_black.200"
        h="2.6rem"
        w="2.6rem"
        rounded="4px"
        fontWeight="600"
        background="superteam_black.800"
        as="button"
        onClick={onNext}
        disabled={disableNext}
        _disabled={{
          opacity: '0.5',
          cursor: 'not-allowed! important',
        }}
        _hover={{
          background: 'superteam_black.200',
        }}
      >
        <Icon w={8} h={8} color="superteam_white" as={BiChevronRight} />
      </Center>
    </Stack>
  );
};

export default Pagination;
