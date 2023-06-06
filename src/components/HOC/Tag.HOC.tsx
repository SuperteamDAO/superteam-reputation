import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const CustomTag = ({ text }: any) => {
  return (
    <Box
      bg={useColorModeValue('superteamGreyLT.400', 'superteamGreyDT.750')}
      color={useColorModeValue('superteamBlack', 'superteamGreyLT.25')}
      opacity="0.8"
      fontSize={'10px'}
      p="1px 6px 1px 6px"
      rounded="4px"
      h="1.2rem"
    >
      <Text p="0" lineHeight={'16px'} fontSize={'10px'} fontWeight="500">
        {text}
      </Text>
    </Box>
  );
};

export default CustomTag;
