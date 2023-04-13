import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const CustomChip = ({ colorScheme, text }: any) => {
  return (
    <Box
      bg={useColorModeValue(`${colorScheme}.50`, `${colorScheme}.800`)}
      maxW="fit-content"
      fontSize="10px"
      p="4px 18px 5px 18px"
      rounded="full"
      h="1.6rem"
      border="0.1px solid"
      borderColor={useColorModeValue(
        `${colorScheme}.500`,
        `${colorScheme}.300`
      )}
    >
      <Text
        p="0"
        lineHeight="17px"
        color={useColorModeValue(`${colorScheme}.500`, `${colorScheme}.300`)}
        fontSize="13px"
        fontWeight="500"
      >
        {text}
      </Text>
    </Box>
  );
};

export default CustomChip;
