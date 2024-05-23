import Config from 'react-native-config';
import {ConfigKey} from './ConfigKey.ts';

export const getConfigOrDefault = (key: ConfigKey, defaultValue = ''): string =>
  Config[key] ?? defaultValue;
