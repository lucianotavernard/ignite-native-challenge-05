import {
  Dimensions,
  ImageSourcePropType,
  Pressable,
  PressableProps
} from 'react-native'
import { Center, Image, Text, useTheme } from 'native-base'

type CoffeeCardProps = PressableProps & {
  coffee: {
    id: number
    tag: string
    name: string
    description: string
    price: number
    image: ImageSourcePropType
  }
}

const { width: deviceWidth } = Dimensions.get('window')

export function CoffeeCard({ coffee, ...rest }: CoffeeCardProps) {
  const { colors } = useTheme()

  return (
    <Pressable
      style={{
        width: deviceWidth * 0.55,

        paddingHorizontal: 16,
        paddingBottom: 20,

        backgroundColor: colors.gray[800],

        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.gray[800],
        borderRadius: 6,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        gap: 14,

        marginTop: 32,
        marginBottom: 32,

        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 2
      }}
      {...rest}
    >
      <Image
        width={120}
        height={120}
        marginTop={-32}
        source={coffee.image}
        resizeMode="cover"
      />

      <Center
        paddingY={1}
        paddingX={2}
        borderRadius={100}
        backgroundColor={colors.purple[300]}
      >
        <Text fontSize="xs" fontFamily="heading" color={colors.purple[700]}>
          {coffee.tag}
        </Text>
      </Center>

      <Center style={{ gap: 4 }}>
        <Text fontSize="xl" fontFamily="heading" color={colors.gray[200]}>
          {coffee.name}
        </Text>

        <Text fontSize="xl" fontFamily="body" color={colors.gray[400]}>
          {coffee.description}
        </Text>
      </Center>

      <Text fontSize="2xl" fontFamily="body" color={colors.yellow[700]}>
        R$ {coffee.price}
      </Text>
    </Pressable>
  )
}
