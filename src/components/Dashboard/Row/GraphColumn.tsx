import { Center, Flex, Icon, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';
import CustomTag from '../../HOC/Tag.HOC';
import { BsCaretDownFill } from 'react-icons/bs';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

enum curveEnum {
  SMOOTH = 'smooth',
  STRAIGHT = 'straight',
  STEPLINE = 'stepline',
}

enum xaxisType {
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
  const [numArray, arrDiff] = randomArray(8, 100);
  console.log('arr diff- ', arrDiff);
  const graphColor = arrDiff >= 0 ? ['#00A67E'] : ['#FF0B71'];

  const [chartData, setChartData] = React.useState({
    series: [
      {
        name: 'series1',
        data: numArray,
      },
    ],
    options: {
      chart: {
        height: 70,
        width: 130,
        toolbar: {
          show: false,
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      stroke: {
        colors: graphColor,
        curve: curveEnum.SMOOTH,
        width: 1,
      },
      fill: {
        colors: graphColor,
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 1,
          gradientToColors: graphColor,
          inverseColors: true,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 100],
          colorStops: [],
        },
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        show: false,
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        labels: {
          show: false,
        },
        type: xaxisType.DATETIME,
        categories: [
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
          '2018-09-19T07:00:00.000Z',
          '2018-09-19T08:30:00.000Z',
          '2018-09-19T09:30:00.000Z',
          '2018-09-19T10:30:00.000Z',
          '2018-09-19T11:30:00.000Z',
        ],
      },
      grid: { show: false },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });

  return typeof window !== 'undefined' ? (
    <Flex h={10} flexDir="row" gap={{ base: '1.8rem', md: '3rem' }}>
      <Flex h={10} flexDir="column">
        <Flex flexDir="row" gap="0.4rem">
          <Text color={'superteam_white'} fontSize={'14px'}>
            162
          </Text>
          <CustomTag colorScheme={'superteam_gray'} text="XP" />
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
            31({arrDiff}%)
          </Text>
        </Flex>
      </Flex>
      <Center>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={70}
          width={130}
        />
      </Center>
    </Flex>
  ) : (
    <></>
  );
};

export default GraphColumn;
