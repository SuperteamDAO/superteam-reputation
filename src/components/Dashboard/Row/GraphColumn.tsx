import { Flex, Text, Tooltip } from '@chakra-ui/react';
import { xpType } from '../../../interfaces/xp';
import CustomTag from '../../HOC/Tag.HOC';

type propsType = {
  row: xpType;
};

const GraphColumn = ({ row }: propsType) => {

  const monthlyXP = row.xp_per_month;
  const cumulativeData: { date: Date; xp: number }[] = row.xp.amount.map(
    (amount, index) => {
      return {
        date: new Date(row.xp.dates[index]),
        xp: amount,
      };
    }
  );



  const graphColor = monthlyXP as number > 0 ? ['#00A67E'] : ['#FFFFFF'];

  return (
    <Flex
      h={10}
      flexDir="row"
      gap={{ base: '1.8rem', md: '3rem' }}
      justify="space-between"
    >
      <Flex h={10} flexDir="column">
        <Flex flexDir="row" gap="0.4rem">
          <Tooltip
            label="XP earned this month"
            fontSize="xs"
            colorScheme="whiteAlpha"
            bg="superteamWhite"
            rounded="md"
            fontWeight="400"
          >
            <Text color={graphColor} fontSize="24px" >
              This Month: {row.xp_per_month}

            </Text>
          </Tooltip>
          <CustomTag text="XP" />
        </Flex>

      </Flex>{' '}
      {/* <Chart lastSixMonths={lastSixMonths} graphColor={graphColor} /> */}
    </Flex>
  );
};

export default GraphColumn;
