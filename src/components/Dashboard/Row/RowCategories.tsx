import { Wrap } from '@chakra-ui/react';
import { skillKind } from '../../../enums/skill';
import { xpType } from '../../../interfaces/xp';
import CustomChip from '../../HOC/Chip.HOC';

type propTypes = {
  row: xpType;
};

const RowCategories = ({ row }: propTypes) => {
  return (
    <Wrap cursor={'default'} p={{ base: '1rem', lg: '0rem' }}>
      {row?.skills.map((skill, key) => {
        if (skill.skill === skillKind.DEV) {
          return (
            <CustomChip
              key={key}
              text="Development"
              colorScheme="superteamGreen"
            />
          );
        }
        if (skill.skill === skillKind.DESIGN) {
          return (
            <CustomChip key={key} text="Design" colorScheme="superteamBlue" />
          );
        }
        if (skill.skill === skillKind.VIDEO) {
          return (
            <CustomChip key={key} text="Video" colorScheme="superteamRed" />
          );
        }
        if (skill.skill === skillKind.OPS) {
          return (
            <CustomChip
              key={key}
              text="Operations"
              colorScheme="superteamYellow"
            />
          );
        }
        if (skill.skill === skillKind.STRATEGY) {
          return (
            <CustomChip key={key} text="Strategy" colorScheme="superteamCyan" />
          );
        }
        if (skill.skill === skillKind.WRITING) {
          return (
            <CustomChip key={key} text="Writing" colorScheme="superteamPink" />
          );
        }
      })}
    </Wrap>
  );
};

export default RowCategories;
