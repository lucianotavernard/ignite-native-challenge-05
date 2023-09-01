import { ReactNode } from 'react'
import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type ButtonProps = IButtonProps & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <ButtonNativeBase
      width="full"
      height={14}
      rounded="sm"
      backgroundColor={variant === 'secondary' ? 'yellow.700' : 'purple.700'}
      _pressed={{ bg: variant === 'secondary' ? 'yellow.500' : 'purple.500' }}
      {...rest}
    >
      <Text
        color="white"
        fontSize="sm"
        fontFamily="heading"
        textTransform="uppercase"
      >
        {children}
      </Text>
    </ButtonNativeBase>
  )
}
