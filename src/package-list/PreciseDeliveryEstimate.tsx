import {DateTime} from 'luxon';
import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {getTokens, ListItem, Text, XGroup} from 'tamagui';
import {Circle} from '@tamagui/lucide-icons';

interface PreciseDeliveryEstimateProps {
  deliveryDate: DateTime;
  delay: number;
}

export const PreciseDeliveryEstimate: FC<PreciseDeliveryEstimateProps> = ({
  deliveryDate,
  delay,
}) => {
  const [diff, setDiff] = useState<string>();
  const {
    color: {onTime, delayed},
  } = getTokens();

  const color = useMemo(
    () => (delay > 0 ? delayed : onTime),
    [delay, delayed, onTime],
  );

  const calculateDiff = useCallback(() => {
    const datePlusDelay = deliveryDate.plus({minute: delay});
    const duration = datePlusDelay.diffNow(['hours', 'minutes']);
    const difference = Math.round(duration.hours || duration.minutes);
    const unit = duration.hours > 0 ? 'hour' : 'minute';
    const plural = difference > 1 ? 's' : '';

    setDiff(`${difference} ${unit}${plural}`);
  }, [delay, deliveryDate]);

  useEffect(() => {
    calculateDiff();
    const interval = setInterval(() => calculateDiff(), 60000);
    return () => clearInterval(interval);
  }, [calculateDiff]);

  return (
    <XGroup alignItems="center" gap="$1">
      <XGroup.Item>
        <Circle size={8} fill={color.val} color={color} />
      </XGroup.Item>

      <XGroup.Item>
        <ListItem.Subtitle fontSize={12} opacity={1}>
          <Text opacity={0.6}>Your delivery driver is</Text>{' '}
          <Text color={color} fontWeight="bold" aria-label="date diff">
            {diff} away
          </Text>
        </ListItem.Subtitle>
      </XGroup.Item>
    </XGroup>
  );
};
