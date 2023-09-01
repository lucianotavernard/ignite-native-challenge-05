import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto'

import {
  Baloo2_400Regular,
  Baloo2_700Bold,
  Baloo2_800ExtraBold
} from '@expo-google-fonts/baloo-2'

import { App } from './src/App'
import { theme } from './src/styles/theme'

export default function Index() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Baloo2_400Regular,
    Baloo2_700Bold,
    Baloo2_800ExtraBold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <App />
    </NativeBaseProvider>
  )
}
