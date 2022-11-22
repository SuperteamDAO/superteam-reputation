import { Flex, Icon, Text, Tooltip } from '@chakra-ui/react';
import { BsCaretDownFill } from 'react-icons/bs';
import CustomTag from '../../HOC/Tag.HOC';
import Chart from './Chart';
import { xpType } from './interfaces/xp';

type propsType = {
  row: xpType;
};

const GraphColumn = ({ row }: propsType) => {
  const cumulativeData: { date: Date; xp: number }[] = row.xp.amount.map(
    (amount, index) => {
      return {
        date: new Date(row.xp.dates[index]),
        xp: amount,
      };
    }
  );

  const monthlyData = cumulativeData.reduce((acc, curr) => {
    const month = curr.date.getMonth();
    const year = curr.date.getFullYear();
    const monthYear = `${month}-${year}`;
    const existingMonth = acc.find((item) => item.monthYear === monthYear);
    if (existingMonth) {
      existingMonth.xp += curr.xp;
    } else {
      acc.push({
        xp: curr.xp,
        monthYear,
      });
    }
    return acc;
  }, [] as { xp: number; monthYear: string }[]);

  const lastSixMonths = [...new Array(6)].map((_, index) => {
    const date = new Date();
    date.setMonth(date.getMonth() - index);
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthYear = `${month}-${year}`;
    const existingMonth = monthlyData.find(
      (item) => item.monthYear === monthYear
    );
    return {
      xp: existingMonth ? existingMonth.xp : 0,
      monthYear,
    };
  });

  const calculateXpGrowth = () => {
    const lastMonth = lastSixMonths[0].xp;
    const secondLastMonth = lastSixMonths[1].xp;
    const diff = lastMonth - secondLastMonth;
    const growth = (diff / secondLastMonth) * 100;
    if (growth > 0) {
      return Math.round(growth);
    } else if (growth < 0) {
      return Math.round(growth);
    } else {
      return 0;
    }
  };

  const graphColor = calculateXpGrowth() > 0 ? ['#00A67E'] : ['#FF0B71'];

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
            colorScheme={'whiteAlpha'}
            bg={'superteamWhite'}
            rounded="md"
            fontWeight="400"
          >
            <Text color={'superteamWhite'} fontSize={'14px'}>
              {lastSixMonths[0].xp}
            </Text>
          </Tooltip>
          <CustomTag colorScheme={'superteamGray'} text="XP" />
        </Flex>

        <Flex alignItems={'center'} align="center" gap="0.4rem" direction="row">
          <Icon
            as={BsCaretDownFill}
            w={3}
            h={3}
            color={graphColor}
            transform={
              graphColor[0] === '#00A67E' ? 'rotate(180deg)' : 'rotate(0deg)'
            }
          />
          <Tooltip
            label="XP earned last month"
            fontSize="xs"
            colorScheme={'whiteAlpha'}
            bg={'superteamWhite'}
            rounded="md"
            fontWeight="400"
          >
            <Text as="span" fontSize={'12px'} color={graphColor}>
              {Math.round(lastSixMonths[1].xp)}
            </Text>
          </Tooltip>
          <Tooltip
            label="XP growth"
            fontSize="xs"
            colorScheme={'whiteAlpha'}
            bg={'superteamWhite'}
            rounded="md"
            fontWeight="400"
          >
            <Text as="span" fontSize={'12px'} color={graphColor}>
              ({calculateXpGrowth()}%)
            </Text>
          </Tooltip>
        </Flex>
      </Flex>{' '}
      <Chart lastSixMonths={lastSixMonths} graphColor={graphColor} />
    </Flex>
  );
};

export default GraphColumn;
