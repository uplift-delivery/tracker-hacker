import {Shipment, ShipmentStatus} from './Shipment.ts';
import {DateTime} from 'luxon';
import {someFedExLocation, uplift} from './locations.ts';
import {
  chicagoToDesMoines,
  desMoinesToDesMoines,
} from './drivingCoordinates.ts';

export const shipmentData: Shipment[] = [
  {
    id: '123',
    trackingNumber: 'a123a123',
    weight: 10,
    location: {
      latitude: 41.57814031843112,
      longitude: -93.62448128817068,
    },
    origin: someFedExLocation,
    destination: uplift,
    coordinates: desMoinesToDesMoines,
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
    origin: {
      latitude: 41.86467002155117,
      longitude: -87.79921520186859,
    },
    destination: uplift,
    deliveryDate: DateTime.utc().plus({day: 2}),
    status: ShipmentStatus.IN_TRANSIT,
    coordinates: chicagoToDesMoines,
    sender: 'Etsy',
  },
  {
    id: '789',
    trackingNumber: 'c789c789',
    weight: 10,
    location: uplift,
    origin: someFedExLocation,
    destination: uplift,
    deliveryDate: DateTime.utc().minus({day: 1}),
    status: ShipmentStatus.DELIVERED,
    coordinates: [uplift],
    sender: 'Online Vendor',
  },
];
