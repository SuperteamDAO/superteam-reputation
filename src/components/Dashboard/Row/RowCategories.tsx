import { Wrap } from '@chakra-ui/react';
import { xpTableType } from '../../../interfaces/xpTable';
import CustomChip from '../../HOC/Chip.HOC';

type propTypes = {
  row: xpTableType;
};

const RowCategories = ({ row }: propTypes) => {
  return (
    <Wrap cursor={'default'} p={{ base: '1rem', lg: '0rem' }}>
      {row.dev_xp > 0 && (
        <CustomChip text="Development" colorScheme="superteamGreen" />
      )}
      {row.design_xp > 0 && (
        <CustomChip text="Design" colorScheme="superteamBlue" />
      )}
      {row.video_xp > 0 && (
        <CustomChip text="Video" colorScheme="superteamRed" />
      )}
      {row.ops_xp > 0 && (
        <CustomChip text="Operations" colorScheme="superteamYellow" />
      )}{' '}
      {row.strategy_xp > 0 && (
        <CustomChip text="Strategy" colorScheme="superteamCyan" />
      )}
      {row.writing_xp > 0 && (
        <CustomChip text="Writing" colorScheme="superteamPink" />
      )}
    </Wrap>
  );
};

export default RowCategories;
