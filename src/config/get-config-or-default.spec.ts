import {getConfigOrDefault} from './get-config-or-default.ts';
import {ConfigKey} from './ConfigKey.ts';

describe('getConfigOrDefault', () => {
  test('should return config value', () => {
    const defaultValue = 'no';
    const actual = getConfigOrDefault(ConfigKey.MAP_API_KEY, defaultValue);
    expect(actual).not.toBe(defaultValue);
  });

  test('should return default value', () => {
    const defaultValue = 'no';
    const actual = getConfigOrDefault('invalid' as ConfigKey, defaultValue);
    expect(actual).toBe(defaultValue);
  });
});
