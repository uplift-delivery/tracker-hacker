import {LatLng} from 'react-native-maps';
import {DateTime} from 'luxon';

export interface Shipment {
  id: string;
  trackingNumber: string;
  weight: number;
  location: LatLng;
  estimatedDelivery: DateTime;
}
