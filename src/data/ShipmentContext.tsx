import React, {createContext, FC, PropsWithChildren, useState} from 'react';
import {Shipment} from './Shipment.ts';
import {shipmentData} from './shipments.ts';

interface ShipmentContextValue {
  shipments: Shipment[];
  setShipments(packages: Shipment[]): void;
}

const defaultValue: ShipmentContextValue = {
  shipments: [],
  setShipments: (_: Shipment[]) => {},
};

export const ShipmentContext = createContext(defaultValue);

export const ShipmentContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [shipments, setShipments] = useState<Shipment[]>(shipmentData);

  return (
    <ShipmentContext.Provider value={{shipments, setShipments}}>
      {children}
    </ShipmentContext.Provider>
  );
};
