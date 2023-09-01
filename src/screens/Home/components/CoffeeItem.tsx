import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Center, Image, Text, useTheme } from 'native-base'

type CoffeeItemProps = TouchableOpacityProps & {
  coffee: Coffee
}

export function CoffeeItem({ coffee, ...rest }: CoffeeItemProps) {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      {...rest}
      style={{
        width: '100%',
        flexDirection: 'row',
        marginTop: 32,

        backgroundColor: colors.gray[800],
        padding: 16,

        gap: 12,

        borderRadius: 6,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,

        borderWidth: 1,
        borderColor: colors.gray[700],

        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 2
      }}
    >
      <Image
        width={120}
        height={120}
        marginTop={-32}
        source={coffee.image}
        resizeMode="cover"
      />

      <Center style={{ gap: 4, marginBottom: 8 }}>
        <Text fontSize="xl" fontFamily="heading" color={colors.gray[200]}>
          {coffee.name}
        </Text>

        <Text fontSize="xl" fontFamily="body" color={colors.gray[400]}>
          {coffee.description}
        </Text>
      </Center>

      <Text fontSize="sm" fontFamily="body" color={colors.yellow[700]}>
        R$ {coffee.price}
      </Text>
    </TouchableOpacity>
  )
}
