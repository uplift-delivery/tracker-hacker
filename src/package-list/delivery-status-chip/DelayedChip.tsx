import React, {FC} from 'react';
import {Chip, ChipLabel} from './Chip.tsx';

export const DelayedChip: FC = () => (
  <Chip borderColor="$delayed" aria-label="delayed chip">
    <ChipLabel color="$delayed">Delayed</ChipLabel>
  </Chip>
);
