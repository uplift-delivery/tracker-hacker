import React, {FC} from 'react';
import {DelayedChip} from './DelayedChip.tsx';
import {OnTimeChip} from './OnTimeChip.tsx';

interface DeliveryStatusChipProps {
  delayed: boolean;
}

export const DeliveryStatusChip: FC<DeliveryStatusChipProps> = ({delayed}) =>
  delayed ? <DelayedChip /> : <OnTimeChip />;
