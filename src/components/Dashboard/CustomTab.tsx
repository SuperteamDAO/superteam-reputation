import { Tab, useColorModeValue } from '@chakra-ui/react';

const CustomTab = ({ title }: { title: string }) => {
  return (
    <Tab
      className={`tab-${title}`}
      h="3.35rem"
      px="0"
      py="0.9rem"
      fontSize={'14px'}
      fontWeight="400"
      whiteSpace="nowrap"
      transform="translateY(2px)"
      transition="0.4s all"
      borderBottom={'3px solid'}
      borderColor={useColorModeValue(
        'superteamWhite.100',
        'superteamGreyDT.1000'
      )}
      color={useColorModeValue('superteamGreyDT.100', 'superteamGreyLT.800')}
      _active={{
        color: useColorModeValue('superteamBlack.100', 'superteamWhite.100'),
        fontWeight: '600',
        transition: '0.4s color',
      }}
      _selected={{
        color: useColorModeValue('superteamBlack.100', 'superteamWhite.100'),
        fontWeight: '600',
        borderBottom: '3px solid',
        borderColor: useColorModeValue(
          'superteamOrange.800',
          'superteamBlueLT.800'
        ),
        transition: '0.4s all',
      }}
    >
      {title}
    </Tab>
  );
};

export default CustomTab;
