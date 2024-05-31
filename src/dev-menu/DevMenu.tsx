import React, {Dispatch, FC, SetStateAction, useContext} from 'react';
import {Text} from 'tamagui';
import {ShipmentContext} from '../data';
import {SeverityToggle} from './SeverityToggle.tsx';
import {BottomMenu} from './BottomMenu.tsx';

interface DevMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DevMenu: FC<DevMenuProps> = ({open, setOpen}) => {
  const {volume, setVolume, traffic, setTraffic, weather, setWeather} =
    useContext(ShipmentContext);

  return (
    <BottomMenu open={open} onOpenChange={setOpen}>
      <Text fontSize={18}>Dev Chaos Menu</Text>
      <SeverityToggle id="volume" value={volume} setValue={setVolume} />
      <SeverityToggle id="traffic" value={traffic} setValue={setTraffic} />
      <SeverityToggle id="weather" value={weather} setValue={setWeather} />
    </BottomMenu>
  );
};
