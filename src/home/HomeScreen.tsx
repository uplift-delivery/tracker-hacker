import React, {FC, useContext} from 'react';
import {ShipmentContext} from '../data';
import {ShipmentList} from '../package-list';
import {Layout} from '../layout';
import {H3, View} from 'tamagui';
import {Header} from './Header.tsx';

export const HomeScreen: FC = () => {
  const {shipments} = useContext(ShipmentContext);

  return (
    <Layout aria-label="Home Screen">
      <Header />

      <View paddingTop="$5">
        <H3 paddingBottom="$3">My Packages</H3>
        <ShipmentList shipments={shipments} />
      </View>
    </Layout>
  );
};
