import React, {FC, useCallback} from 'react';
import {H2, Text, XGroup} from 'tamagui';
import {Lightbulb} from '@tamagui/lucide-icons';
import {DateTime} from 'luxon';

export const Header: FC = () => {
  const formatDate = useCallback(
    (minute: number) =>
      DateTime.local().plus({minute}).toLocaleString(DateTime.TIME_SIMPLE),
    [],
  );

  return (
    <>
      <H2 paddingBottom="$2">P3 + Uplift</H2>

      <Text numberOfLines={1} fontSize={20} lineHeight={24}>
        1300 Walnut Street, Suite 200, Des Moines, IA 50309
      </Text>

      <XGroup paddingTop="$2" alignItems="center" gap="$1">
        <XGroup.Item>
          <Lightbulb size={12} color="$brand" fill="#4D148C" />
        </XGroup.Item>

        <XGroup.Item>
          <Text fontSize={11} lineHeight={18} color="$brand">
            Average delivery time for this address:{' '}
            <Text fontWeight="bold" color="$brand">
              {formatDate(15)} – {formatDate(30)}
            </Text>
          </Text>
        </XGroup.Item>
      </XGroup>
    </>
  );
};
