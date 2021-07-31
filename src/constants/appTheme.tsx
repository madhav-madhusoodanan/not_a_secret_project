import {DefaultTheme} from '@react-navigation/native';

export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    backgroundSecondary: '#E9E9E9',
    backgroundTertiary: 'white',
    boldText: 'black',
    border: '#D3D3D3',
    borderThick: '#d7d7d7',
    card: 'rgb(255, 255, 255)',
    dimmedText: '#979A9A',
    tint: '#FCFCFD',
    icon: 'black',
    linkText: '#1E75BE',
    notification: 'rgb(255, 69, 58)',
    primary: '#00AAFF',
    primaryLight: '#87d7ff',
    secondary: '#414757',
    shadow: '#000',
    text: '#1E2022',
    textInverted: 'white',
    textTitle: '#302D22',
    error: '#f13a59',
    success: '#00B386',
    google: '#2E7D32',
  },
  dark: false,
};
