import { Flex, Icon, Text } from '@chakra-ui/react';
import { BsCaretDownFill } from 'react-icons/bs';
import CustomTag from '../../HOC/Tag.HOC';
// const ReactApexChart = dynamic(() => import('react-apexcharts'), {
//   ssr: false,
// });

export enum curveEnum {
  SMOOTH = 'smooth',
  STRAIGHT = 'straight',
  STEPLINE = 'stepline',
}

export enum xaxisType {
  CATEGORY = 'category',
  DATETIME = 'datetime',
  NUMERIC = 'numeric',
}
function randomArray(length: number, max: number): [number[], number] {
  const arr = [...new Array(length)].map(() => Math.round(Math.random() * max));
  const arrDiff = arr[length - 1] - arr[0];
  return [arr, arrDiff];
}
const GraphColumn = () => {
  const [_numArray, arrDiff] = randomArray(8, 100);

  const graphColor = arrDiff >= 0 ? ['#00A67E'] : ['#FF0B71'];

  // const [chartData, setChartData] = React.useState({
  //   series: [
  //     {
  //       name: 'series1',
  //       data: numArray,
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       height: 70,
  //       width: 130,
  //       toolbar: {
  //         show: false,
  //         tools: {
  //           download: false,
  //           selection: false,
  //           zoom: false,
  //           zoomin: false,
  //           zoomout: false,
  //           pan: false,
  //           reset: false,
  //         },
  //       },
  //     },
  //     stroke: {
  //       colors: graphColor,
  //       curve: curveEnum.SMOOTH,
  //       width: 1,
  //     },
  //     fill: {
  //       colors: graphColor,
  //       type: 'gradient',
  //       gradient: {
  //         shade: 'dark',
  //         type: 'vertical',
  //         shadeIntensity: 1,
  //         gradientToColors: graphColor,
  //         inverseColors: true,
  //         opacityFrom: 0.4,
  //         opacityTo: 0.1,
  //         stops: [0, 100],
  //         colorStops: [],
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },

  //     xaxis: {
  //       show: false,
  //       axisTicks: {
  //         show: false,
  //       },
  //       crosshairs: {
  //         show: false,
  //       },
  //       labels: {
  //         show: false,
  //       },
  //       type: xaxisType.DATETIME,
  //       categories: [
  //         '2018-09-19T04:30:00.000Z',
  //         '2018-09-19T05:30:00.000Z',
  //         '2018-09-19T06:30:00.000Z',
  //         '2018-09-19T07:00:00.000Z',
  //         '2018-09-19T08:30:00.000Z',
  //         '2018-09-19T09:30:00.000Z',
  //         '2018-09-19T10:30:00.000Z',
  //         '2018-09-19T11:30:00.000Z',
  //       ],
  //     },
  //     grid: { show: false },
  //     yaxis: {
  //       show: false,
  //       labels: {
  //         show: false,
  //       },
  //     },
  //     tooltip: {
  //       enabled: false,
  //       x: {
  //         format: 'dd/MM/yy HH:mm',
  //       },
  //     },
  //   },
  // });
  return (
    <Flex h={10} flexDir="row" gap={{ base: '1.8rem', md: '3rem' }}>
      <Flex h={10} flexDir="column">
        <Flex flexDir="row" gap="0.4rem">
          <Text color={'superteamWhite'} fontSize={'14px'}>
            162
          </Text>
          <CustomTag colorScheme={'superteamGray'} text="XP" />
        </Flex>

        <Flex alignItems={'center'} align="center" gap="0.4rem" direction="row">
          <Icon
            as={BsCaretDownFill}
            w={3}
            h={3}
            color={graphColor}
            transform={arrDiff >= 0 ? 'rotate(180deg)' : 'rotate(0deg)'}
          />
          <Text fontSize={'12px'} color={graphColor}>
            31(13%)
          </Text>
        </Flex>
      </Flex>{' '}
    </Flex>
  );
};
{
  /* typeof window !== 'undefined' ? (
      <Center>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={70}
          width={130}
        />
      </Center> */
}

export default GraphColumn;
