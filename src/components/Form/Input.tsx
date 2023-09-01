import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base'

type InputProps = IInputProps & {
  error?: string
}

export function Input({ error, isInvalid, ...rest }: InputProps) {
  const invalid = !!error || isInvalid

  return (
    <FormControl isInvalid={invalid}>
      <NativeBaseInput
        minHeight={14}
        paddingX={4}
        borderWidth={0}
        borderRadius={8}
        backgroundColor="gray.700"
        fontFamily="body"
        fontSize="md"
        color="white"
        placeholderTextColor="gray.300"
        isInvalid={invalid}
        _invalid={{ borderWidth: 1, borderColor: 'red.500' }}
        _focus={{
          borderWidth: 1,
          borderColor: 'green.500',
          backgroundColor: 'gray.700'
        }}
        {...rest}
      />

      {error && (
        <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
          {error}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  )
}
