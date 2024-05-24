import {Shipment, ShipmentStatus} from './Shipment.ts';
import {DateTime} from 'luxon';
import {someFedExLocation, uplift} from './locations.ts';

export const shipmentData: Shipment[] = [
  {
    id: '123',
    trackingNumber: 'a123a123',
    weight: 10,
    location: someFedExLocation,
    deliveryDate: DateTime.utc().endOf('day'),
    status: ShipmentStatus.OUT_FOR_DELIVERY,
    sender: 'Walgreens',
  },
  {
    id: '456',
    trackingNumber: 'b456b456',
    weight: 5,
    location: {
      latitude: 41.86467002155117,
      longitude: -87.79921520186859,
    },
    deliveryDate: DateTime.utc().plus({day: 2}),
    status: ShipmentStatus.IN_TRANSIT,
    sender: 'Etsy',
  },
  {
    id: '789',
    trackingNumber: 'c789c789',
    weight: 10,
    location: uplift,
    deliveryDate: DateTime.utc().minus({day: 1}),
    status: ShipmentStatus.DELIVERED,
    sender: 'Online Vendor',
  },
];
