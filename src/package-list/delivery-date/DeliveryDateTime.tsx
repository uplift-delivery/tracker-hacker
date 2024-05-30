import React, {FC, useCallback, useMemo} from 'react';
import {ListItem, Text} from 'tamagui';
import {DateTime} from 'luxon';

interface DeliveryDateTimeProps {
  date: DateTime;
}

export const DeliveryDateTime: FC<DeliveryDateTimeProps> = ({date}) => {
  const formatDeliveryDate = useCallback(
    (format: Intl.DateTimeFormatOptions) => date.toLocaleString(format),
    [date],
  );

  const deliveryDate = useMemo(
    () =>
      `${formatDeliveryDate(DateTime.DATE_SHORT)} at ${formatDeliveryDate(
        DateTime.TIME_SIMPLE,
      )}`,
    [formatDeliveryDate],
  );

  return (
    <ListItem.Subtitle aria-label="delivery date time">
      Expected Delivery <Text fontWeight="bold">{deliveryDate}</Text>
    </ListItem.Subtitle>
  );
};
