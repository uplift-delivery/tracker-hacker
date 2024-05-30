import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigation';
import {ArrowLeft} from '@tamagui/lucide-icons';
import {Button, styled} from 'tamagui';

const BackButton = styled(Button, {
  width: '$3',
  height: '$3',
  position: 'absolute',
  top: '$5',
  left: '$3',
  zIndex: '$1',
  borderRadius: '$8',
  borderColor: '#C4C4C4',
  color: '$accentColor',
  backgroundColor: '$background',
  elevation: 2,
  'aria-label': 'navigate back',
});

export const FloatingBackButton: FC = () => {
  const {goBack} = useNavigation<NavigationProps>();

  return <BackButton icon={<ArrowLeft size="$1.5" />} onPress={goBack} />;
};
