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
    trackingNumber: 'A123A123A123A123',
    weight: 10,
    location: desMoinesToDesMoines[0],
    origin: someFedExLocation,
    destination: uplift,
    coordinates: desMoinesToDesMoines,
    deliveryDate: DateTime.local().plus({minute: 30}),
    status: ShipmentStatus.OUT_FOR_DELIVERY,
    sender: 'Walgreens',
  },
  {
    id: '456',
    trackingNumber: 'B456B456B456B456',
    weight: 5,
    location: chicagoToDesMoines[0],
    origin: {
      latitude: 41.86467002155117,
      longitude: -87.79921520186859,
    },
    destination: uplift,
    deliveryDate: DateTime.local().plus({day: 2}),
    status: ShipmentStatus.IN_TRANSIT,
    coordinates: chicagoToDesMoines,
    sender: 'Etsy',
  },
  {
    id: '789',
    trackingNumber: 'C789C789C789C789',
    weight: 10,
    location: uplift,
    origin: someFedExLocation,
    destination: uplift,
    deliveryDate: DateTime.local().minus({day: 1}),
    status: ShipmentStatus.DELIVERED,
    coordinates: [uplift],
    sender: 'Online Vendor',
  },
];
