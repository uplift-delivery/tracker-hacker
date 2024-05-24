import React, {FC} from 'react';
import {YGroup} from 'tamagui';
import {Shipment} from '../data';
import {ShipmentListItem} from './ShipmentListItem.tsx';

export interface ShipmentListProps {
  shipments: Shipment[];
}

export const ShipmentList: FC<ShipmentListProps> = ({shipments}) => (
  <YGroup alignSelf="center" disablePassBorderRadius={true}>
    {shipments.map(shipment => (
      <YGroup.Item key={shipment.id}>
        <ShipmentListItem shipment={shipment} />
      </YGroup.Item>
    ))}
  </YGroup>
);
