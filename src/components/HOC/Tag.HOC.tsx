import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const CustomTag = ({ colorScheme, text }: any) => {
  return (
    <Box
      bg={`${colorScheme}.900`}
      color={`${colorScheme}.400`}
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
