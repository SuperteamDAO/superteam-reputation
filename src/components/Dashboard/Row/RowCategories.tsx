import { Wrap } from '@chakra-ui/react';
import React from 'react';
import CustomChip from '../../HOC/Chip.HOC';
import { xpTableType } from '../../../interfaces/xpTable';

type propTypes = {
  row: xpTableType;
};

const RowCategories = ({ row }: propTypes) => {
  return (
    <Wrap cursor={'default'} p={{ base: '1rem', lg: '0rem' }}>
      {row.dev_xp > 0 && (
        <CustomChip text="Development" colorScheme="superteam_green" />
      )}
      {row.design_xp > 0 && (
        <CustomChip text="Design" colorScheme="superteam_blue" />
      )}
      {row.video_xp > 0 && (
        <CustomChip text="Video" colorScheme="superteam_red" />
      )}
      {row.ops_xp > 0 && (
        <CustomChip text="Operations" colorScheme="superteam_yellow" />
      )}{' '}
      {row.strategy_xp > 0 && (
        <CustomChip text="Strategy" colorScheme="superteam_cyan" />
      )}
      {row.writing_xp > 0 && (
        <CustomChip text="Writing" colorScheme="superteam_pink" />
      )}
    </Wrap>
  );
};

export default RowCategories;
