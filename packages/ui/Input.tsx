import { TextInput, TextInputProps } from '@mantine/core'

export const Input = (props?: TextInputProps) => {
   return (
      <TextInput
         label="Input label"
         classNames={{
            input: `
               border-2 border-blue-500 rounded-md
               px-4 py-2
               focus:border-2 focus:ring-2 focus:ring-blue-300
            `,
            invalid: `border-red-400`,
         }}
         {...props}
      />
   )
}
