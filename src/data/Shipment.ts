import {LatLng} from 'react-native-maps';
import {DateTime} from 'luxon';

export interface Shipment {
  id: string;
  trackingNumber: string;
  weight: number;
  location: LatLng;
  origin: LatLng;
  destination: LatLng;
  deliveryDate: DateTime;
  status: ShipmentStatus;
  sender: string;
}

export enum ShipmentStatus {
  NOT_SHIPPED = 'Not Shipped',
  IN_TRANSIT = 'In Transit',
  OUT_FOR_DELIVERY = 'Out For Delivery',
  DELIVERED = 'Delivered',
}
