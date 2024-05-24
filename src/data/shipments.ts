import {Shipment} from './Shipment.ts';
import {DateTime} from 'luxon';
import {someFedExLocation} from './locations.ts';

export const shipmentData: Shipment[] = [
  {
    id: '123',
    trackingNumber: 'a123a123',
    weight: 10,
    location: someFedExLocation,
    estimatedDelivery: DateTime.utc().endOf('day'),
  },
  {
    id: '456',
    trackingNumber: 'b456b456',
    weight: 5,
    location: {
      latitude: 41.86467002155117,
      longitude: -87.79921520186859,
    },
    estimatedDelivery: DateTime.utc().plus({day: 2}),
  },
];
