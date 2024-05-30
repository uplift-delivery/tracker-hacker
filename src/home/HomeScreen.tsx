import React, {FC, useContext} from 'react';
import {ShipmentContext} from '../data';
import {ShipmentList} from '../package-list';
import {Header, Layout} from '../layout';

export const HomeScreen: FC = () => {
  const {shipments} = useContext(ShipmentContext);

  return (
    <Layout aria-label="Home Screen">
      <Header>My Packages</Header>
      <ShipmentList shipments={shipments} />
    </Layout>
  );
};
