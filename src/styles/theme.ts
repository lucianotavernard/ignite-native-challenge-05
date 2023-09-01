import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    gray: {
      100: '#272221',
      200: '#403937',
      300: '#574F4D',
      400: '#8D8686',
      500: '#D7D5D5',
      600: '#E6E5E5',
      700: '#EDEDED',
      800: '#F3F2F2',
      900: '#FAFAFA'
    },
    purple: {
      700: '#4B2995',
      500: '#8047F8',
      300: '#EBE5F9'
    },
    red: {
      700: '#C44117',
      500: '#E8BAAB',
      300: '#F2DFD8'
    },
    white: '#FFFFFF',
    yellow: {
      700: '#C47F17',
      500: '#DBAC2C'
    },
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  },
  sizes: {
    14: 56,
    33: 148
  }
})
