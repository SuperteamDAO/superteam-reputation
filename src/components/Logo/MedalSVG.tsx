import { Center, Text } from '@chakra-ui/react';
import { SortByXp } from '../../util/sortingData';
interface MedalSVGProps {
  index: number;
}

// include all xp orders that should not show a medal
export const hideMedalOrder = [SortByXp.lowToHighXp];

const MedalSVG = ({ index }: MedalSVGProps) => {
  if (index > 3) return <Text> {index.toString()} </Text>;
  let color: string =
    index === 1
      ? '#FFCA0D'
      : index === 2
        ? '#799BBE'
        : index === 3
          ? '#BE8A79'
          : '';

  return (
    <Center alignItems="start" justifyContent={'start'}>
      <svg
        width="14"
        height="21"
        viewBox="0 0 14 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.7515 12.0485L2.71436 19.8571L7.00007 17.2857L11.2858 19.8571L10.2486 12.04"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Center>
  );
};

export default MedalSVG;
