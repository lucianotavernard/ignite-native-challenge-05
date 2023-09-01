import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Box, Center, Text, useTheme } from 'native-base'

import { ShoppingCart } from 'phosphor-react-native'

type CartProps = TouchableOpacityProps & {
  quantityItemsCart: number
}

export function Cart({ quantityItemsCart, ...rest }: CartProps) {
  const { colors } = useTheme()

  const color =
    quantityItemsCart === 0 ? colors.yellow[700] : colors.purple[500]

  return (
    <TouchableOpacity activeOpacity={0.6} {...rest}>
      <Box position="relative">
        <ShoppingCart size={20} weight="fill" color={color} />

        {quantityItemsCart > 0 && (
          <Center
            width={20}
            height={20}
            position="absolute"
            borderRadius={999}
            backgroundColor={colors.purple[500]}
          >
            <Text fontSize="xs" fontFamily="body" color="white">
              {quantityItemsCart}
            </Text>
          </Center>
        )}
      </Box>
    </TouchableOpacity>
  )
}
