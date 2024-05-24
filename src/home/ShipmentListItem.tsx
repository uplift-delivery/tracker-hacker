import React, {FC, useMemo} from 'react';
import {Shipment, ShipmentStatus} from '../data';
import {ListItem, styled} from 'tamagui';
import {DateTime} from 'luxon';
import {ShipmentIcon} from './ShipmentIcon.tsx';

const StyledListItem = styled(ListItem, {
  size: '$5',
  backgroundColor: '$background0',
  borderBottomWidth: 1,
  borderBottomColor: '$color18',
  'aria-label': 'shipment',
});

interface ShipmentListItemProps {
  shipment: Shipment;
}

export const ShipmentListItem: FC<ShipmentListItemProps> = ({shipment}) => {
  // const {navigate} = useNavigation<NavigationProps>();

  const delivered = useMemo(
    () => shipment.status === ShipmentStatus.DELIVERED,
    [shipment.status],
  );

  const deliveryDate = useMemo(
    () => shipment.deliveryDate.toLocaleString(DateTime.DATE_SHORT),
    [shipment.deliveryDate],
  );

  // const navigateToMap = useCallback(
  //   () => navigate(Routes.Map, {shipmentId: shipment.id}),
  //   [navigate, shipment.id],
  // );

  return (
    <StyledListItem
      icon={<ShipmentIcon delivered={delivered} />}
      title={shipment.sender}
      // onPress={navigateToMap}
    >
      <ListItem.Subtitle>
        Tracking Number: {shipment.trackingNumber}
      </ListItem.Subtitle>

      <ListItem.Subtitle>
        {delivered ? '' : 'Estimated '}
        Delivery Date: {deliveryDate}
      </ListItem.Subtitle>

      <ListItem.Subtitle>Status: {shipment.status}</ListItem.Subtitle>
    </StyledListItem>
  );
};
