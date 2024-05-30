import React, {FC} from 'react';
import {styled, YGroup} from 'tamagui';
import {Shipment} from '../data';
import {ShipmentListItem} from './ShipmentListItem.tsx';

const List = styled(YGroup, {
  alignSelf: 'center',
  borderRadius: 0,
  borderWidth: 1,
  borderBottomWidth: 0,
  borderColor: '#C4C4C4',
  disablePassBorderRadius: true,
});

export interface ShipmentListProps {
  shipments: Shipment[];
}

export const ShipmentList: FC<ShipmentListProps> = ({shipments}) => (
  <List>
    {shipments.map(shipment => (
      <YGroup.Item key={shipment.id}>
        <ShipmentListItem shipment={shipment} />
      </YGroup.Item>
    ))}
  </List>
);
