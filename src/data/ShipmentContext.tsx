import React, {createContext, FC, PropsWithChildren, useState} from 'react';
import {Shipment} from './Shipment.ts';
import {shipmentData} from './shipments.ts';
import {LatLng} from 'react-native-maps';
import {Severity} from './Severity.tsx';

interface ShipmentContextValue {
  shipments: Shipment[];
  setShipments(packages: Shipment[]): void;
  updateShipmentLocation(shipmentId: string, location: LatLng): void;
  volume: Severity;
  setVolume(volume: Severity): void;
  traffic: Severity;
  setTraffic(traffic: Severity): void;
  weather: Severity;
  setWeather(weather: Severity): void;
}

export const defaultValue: ShipmentContextValue = {
  shipments: [],
  setShipments: (_: Shipment[]) => {},
  updateShipmentLocation: () => {},
  volume: Severity.LIGHT,
  setVolume: (_: Severity) => {},
  traffic: Severity.LIGHT,
  setTraffic: (_: Severity) => {},
  weather: Severity.LIGHT,
  setWeather: (_: Severity) => {},
};

export const ShipmentContext = createContext(defaultValue);

export const ShipmentContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [shipments, setShipments] = useState<Shipment[]>(shipmentData);
  const [volume, setVolume] = useState<Severity>(defaultValue.volume);
  const [traffic, setTraffic] = useState<Severity>(defaultValue.traffic);
  const [weather, setWeather] = useState<Severity>(defaultValue.weather);

  const updateShipment = (shipmentId: string, location: LatLng): void => {
    const updatedShipmentList = shipments.map(shipment =>
      shipment.id === shipmentId ? {...shipment, location} : shipment,
    );
    setShipments(updatedShipmentList);
  };

  return (
    <ShipmentContext.Provider
      value={{
        shipments,
        setShipments,
        updateShipmentLocation: updateShipment,
        volume,
        setVolume,
        traffic,
        setTraffic,
        weather,
        setWeather,
      }}>
      {children}
    </ShipmentContext.Provider>
  );
};
