import React, {FC, useContext} from 'react';
import {ShipmentContext} from '../data';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem, YGroup} from 'tamagui';
import {DateTime} from 'luxon';

export const HomeScreen: FC = () => {
  const {shipments} = useContext(ShipmentContext);

  return (
    <SafeAreaView>
      <YGroup alignSelf="center" bordered width={240} size="$4">
        {shipments.map(item => (
          <YGroup.Item key={item.id}>
            <ListItem
              hoverTheme
              title={item.estimatedDelivery.toLocaleString(DateTime.DATE_SHORT)}
              subTitle={item.trackingNumber}
              aria-label="package"
            />
          </YGroup.Item>
        ))}
      </YGroup>
    </SafeAreaView>
  );
};
