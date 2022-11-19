import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const CustomChip = ({ colorScheme, text }: any) => {
  return (
    <Box
      bg={`${colorScheme}.100`}
      fontSize={'10px'}
      p="4px 18px 5px 18px"
      rounded="full"
      h="1.6rem"
    >
      <Text
        p="0"
        lineHeight={'17px'}
        color={`${colorScheme}.800`}
        fontSize={'13px'}
        fontWeight="500"
      >
        {text}
      </Text>
    </Box>
  );
};

export default CustomChip;
