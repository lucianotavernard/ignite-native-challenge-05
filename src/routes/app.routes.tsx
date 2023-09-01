import { useTheme } from 'native-base'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: theme.colors.purple[100]
      }}
    >
      <Screen name="home" component={Home} />
    </Navigator>
  )
}
