import {
   InputWrapper,
   TextInput,
   PasswordInput,
   Container,
   Group,
   Space,
   Title,
   Button,
} from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { Input, Button as ButtonStyle, ButtonAlert } from 'ui'
import img from '../logo.svg'
import { DiCode } from 'react-icons/di'
import { Link } from 'react-router-dom'

const Playground = () => {
   const form = useForm({
      initialValues: {
         email: '',
         name: '',
         lastName: '',
         password: '',
      },
      validationRules: {
         email: (value: string) => /^\S+@\S+$/.test(value),
         name: value => value.trim().length >= 2,
         lastName: value => value.trim().length >= 2,
         password: value => value.trim().length >= 2,
      },
      errorMessages: {
         email: 'Неверный email',
         name: 'Не меньше 2 символов',
         lastName: 'Не меньше 2 символов',
         password: 'Не меньше 2 символов',
      },
   })

   return (
      <Container size="xs" className="mt-6">
         <Link to="/">Home</Link>

         <Title order={4} className="mb-2">
            Регистрация
         </Title>
         <form onSubmit={form.onSubmit(values => console.log(values))}>
            <Group direction="column" spacing="lg" grow>
               <Input label="Имя" {...form.getInputProps('name')} />
               <Input label="Фамилия" {...form.getInputProps('lastName')} />
               <Input label="Почта" {...form.getInputProps('email')} />
               <PasswordInput
                  label="Пароль"
                  classNames={{
                     input: `
                        border-2 border-blue-500 rounded-md 
                        px-4 py-2
                        focus:ring-2 focus:ring-blue-300
                     `,
                  }}
                  {...form.getInputProps('password')}
               />
               <ButtonStyle leftIcon={<DiCode />} type="submit" value="outline">
                  Зарегистрироваться
               </ButtonStyle>
               <ButtonAlert leftIcon={<DiCode />}>
                  Зарегистрироваться
               </ButtonAlert>
            </Group>
         </form>
      </Container>
   )
}

export default Playground
