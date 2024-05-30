import {DateTime} from 'luxon';
import React, {FC, useMemo} from 'react';
import {ListItem, Text} from 'tamagui';

interface DeliveryDateProps {
  date: DateTime;
  delivered: boolean;
}

export const DeliveryDate: FC<DeliveryDateProps> = ({date, delivered}) => {
  const deliveryDateLabel = useMemo(
    () => `${delivered ? '' : 'Expected Delivery '}`,
    [delivered],
  );

  const deliveryDate = useMemo(
    () => date.toLocaleString(DateTime.DATE_SHORT),
    [date],
  );

  return (
    <ListItem.Subtitle aria-label="delivery date">
      {deliveryDateLabel}
      <Text fontWeight="bold">{deliveryDate}</Text>
    </ListItem.Subtitle>
  );
};
