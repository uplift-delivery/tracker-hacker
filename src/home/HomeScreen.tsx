import React, {FC, useContext} from 'react';
import {ShipmentContext} from '../data';
import {ShipmentList} from './ShipmentList.tsx';
import {Header, Layout} from '../layout';

export const HomeScreen: FC = () => {
  const {shipments} = useContext(ShipmentContext);

  return (
    <Layout aria-label="Home Screen">
      <Header>Your Shipments</Header>
      <ShipmentList shipments={shipments} />
    </Layout>
  );
};
