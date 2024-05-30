import React, {FC, useCallback, useContext, useMemo} from 'react';
import {
  DELIVERY_DELAY_THRESHOLD,
  Severity,
  Shipment,
  ShipmentContext,
  ShipmentStatus,
} from '../data';
import {ListItem, styled, XGroup} from 'tamagui';
import {ShipmentIcon} from './ShipmentIcon.tsx';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, Routes} from '../navigation';
import {DeliveryProgress} from './DeliveryProgress.tsx';
import {ShipmentStatusDescription} from './ShipmentStatusDescription.tsx';
import {DeliveryStatusChip} from './delivery-status-chip/DeliveryStatusChip.tsx';
import {PreciseDeliveryEstimate} from './PreciseDeliveryEstimate.tsx';
import {DeliveryDateTime} from './delivery-date/DeliveryDateTime.tsx';
import {DeliveryDate} from './delivery-date/DeliveryDate.tsx';

export const StyledListItem = styled(ListItem, {
  size: '$5',
  padding: '$4',
  backgroundColor: '$background0',
  borderBottomWidth: 1,
  borderBottomColor: '$color18',
  'aria-label': 'shipment',
  borderColor: '#C4C4C4',
});

interface ShipmentListItemProps {
  shipment: Shipment;
}

export const ShipmentListItem: FC<ShipmentListItemProps> = ({shipment}) => {
  const {navigate} = useNavigation<NavigationProps>();
  const {volume, traffic, weather} = useContext(ShipmentContext);

  const delay = useMemo(
    () =>
      [volume, traffic, weather].reduce((prev, curr) => {
        if (curr === Severity.HEAVY) {
          return prev + 30;
        }

        return curr === Severity.MEDIUM ? prev + 10 : prev;
      }, 0),
    [traffic, volume, weather],
  );

  const delivered = useMemo(
    () => shipment.status === ShipmentStatus.DELIVERED,
    [shipment.status],
  );

  const outForDelivery = useMemo(
    () => shipment.status === ShipmentStatus.OUT_FOR_DELIVERY,
    [shipment.status],
  );

  const navigateToMap = useCallback(
    () => navigate(Routes.Map, {shipmentId: shipment.id}),
    [navigate, shipment.id],
  );

  return (
    <StyledListItem
      icon={<ShipmentIcon delivered={delivered} />}
      title={shipment.sender}
      onPress={navigateToMap}
      pressTheme>
      <ListItem.Subtitle>{shipment.trackingNumber}</ListItem.Subtitle>
      <DeliveryProgress status={shipment.status} />

      <ShipmentStatusDescription label={shipment.status.toUpperCase()}>
        {outForDelivery && (
          <XGroup.Item>
            <DeliveryStatusChip delayed={delay >= DELIVERY_DELAY_THRESHOLD} />
          </XGroup.Item>
        )}
      </ShipmentStatusDescription>

      {outForDelivery ? (
        <DeliveryDateTime date={shipment.deliveryDate} />
      ) : (
        <DeliveryDate date={shipment.deliveryDate} delivered={delivered} />
      )}

      {outForDelivery && (
        <PreciseDeliveryEstimate
          deliveryDate={shipment.deliveryDate}
          delay={delay}
        />
      )}
    </StyledListItem>
  );
};
