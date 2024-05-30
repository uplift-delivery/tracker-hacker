import {LatLng} from 'react-native-maps';
import {DateTime} from 'luxon';

export interface Shipment {
  id: string;
  trackingNumber: string;
  weight: number;
  location: LatLng;
  origin: LatLng;
  destination: LatLng;
  coordinates: LatLng[];
  deliveryDate: DateTime;
  status: ShipmentStatus;
  sender: string;
}

export enum ShipmentStatus {
  LABEL_CREATED = 'Label Created',
  IN_TRANSIT = 'In Transit',
  OUT_FOR_DELIVERY = 'Out For Delivery',
  DELIVERED = 'Delivered',
}

export const DELIVERY_DELAY_THRESHOLD = 30;
