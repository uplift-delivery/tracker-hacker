import React, {FC} from 'react';
import {Chip, ChipLabel} from './Chip.tsx';

export const OnTimeChip: FC = () => (
  <Chip borderColor="$onTime" aria-label="on time chip">
    <ChipLabel color="$onTime">On Time</ChipLabel>
  </Chip>
);
