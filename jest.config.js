module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./setupJest.tsx'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
};
