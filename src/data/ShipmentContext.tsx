import React, {createContext, FC, PropsWithChildren, useState} from 'react';
import {Shipment} from './Shipment.ts';
import {shipmentData} from './shipments.ts';
import {LatLng} from "react-native-maps";

interface ShipmentContextValue {
  shipments: Shipment[];
  setShipments(packages: Shipment[]): void;
  updateShipmentLocation(shipmentId: string, location: LatLng): void;
}

const defaultValue: ShipmentContextValue = {
  shipments: [],
  setShipments: (_: Shipment[]) => {},
  updateShipmentLocation: () => {},
};

export const ShipmentContext = createContext(defaultValue);

export const ShipmentContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [shipments, setShipments] = useState<Shipment[]>(shipmentData);

  const updateShipment = (shipmentId: string, location: LatLng): void => {
    const updatedShipmentList = shipments.map(shipment => {
      if (shipment.id === shipmentId) {
        shipment.location = location;
      }
      return shipment;
    });
    setShipments(updatedShipmentList);
  };

  return (
    <ShipmentContext.Provider
      value={{shipments, setShipments, updateShipmentLocation: updateShipment}}>
      {children}
    </ShipmentContext.Provider>
  );
};
