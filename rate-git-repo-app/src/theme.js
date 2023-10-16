import { Platform } from 'react-native';

const fontSizes = {
  body: 14,
  subheading: 16,
  heading: 18,
};

const theme = {
  colors: {
    primary: '#0366d6',
    light: '#e1e4e8',
    dark: '#24292e',
    white: '#ffffff',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textTernary: '#ffffff',
    error: '#d73a4a',
  },
  fontSizes,
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  input: {
    height: 50,
    margin: 8,
    padding: 10,
    borderRadius: 4,
    fontSize: fontSizes.heading,
  },
};

export default theme;
