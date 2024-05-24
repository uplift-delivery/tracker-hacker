module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native',
            importNames: ['SafeAreaView'],
            message:
              'Import SafeAreaView from react-native-safe-area-context instead',
          },
          {
            name: 'moti',
            importNames: ['SafeAreaView'],
            message:
              'Import SafeAreaView from react-native-safe-area-context instead',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
