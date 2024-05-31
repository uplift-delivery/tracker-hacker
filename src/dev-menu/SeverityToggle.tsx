import React, {FC} from 'react';
import {Severity} from '../data';
import {Label, styled, Text, ToggleGroup, View} from 'tamagui';

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const ToggleLabel = styled(Label, {
  fontSize: 14,
});

const Toggle = styled(ToggleGroup, {
  orientation: 'horizontal',
  size: '$4',
  disableDeactivation: true,
  theme: 'purple',
});

const ToggleText = styled(Text, {
  minWidth: '$6',
  textAlign: 'center',
});

interface TogglesProps {
  id: string;
  value: Severity;
  setValue: (_: Severity) => void;
}

export const SeverityToggle: FC<TogglesProps> = ({id, value, setValue}) => (
  <View>
    <ToggleLabel htmlFor={id}>{capitalize(id)}</ToggleLabel>

    <Toggle value={value} onValueChange={setValue} id={id} type="single">
      {Object.values(Severity).map(severity => (
        <ToggleGroup.Item key={`${id}-${severity}`} value={severity}>
          <ToggleText>{capitalize(severity)}</ToggleText>
        </ToggleGroup.Item>
      ))}
    </Toggle>
  </View>
);
