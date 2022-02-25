import { useForm } from '@mantine/hooks'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, PasswordInput } from 'ui'

const SingUp = () => {
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
         password: value => value.trim().length >= 6,
      },
      errorMessages: {
         email: 'Неверный email',
         name: 'Не меньше 2 символов',
         lastName: 'Не меньше 2 символов',
         password: 'Не меньше 6 символов',
      },
   })

   const handleSubmit = value => {
      console.log(value)
   }

   return (
      <div className="max-w-md mx-auto my-6 bg-slate-200 p-4 lg:p-6 rounded-lg shadow-md">
         <h1 className="underline decoration-blue-500">Регистрация</h1>

         <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-3">
            <Input label="Имя" {...form.getInputProps('name')} />
            <Input label="Фамилия" {...form.getInputProps('lastName')} />
            <Input
               label="Почта"
               type="email"
               {...form.getInputProps('email')}
            />
            <PasswordInput label="Пароль" {...form.getInputProps('password')} />

            <Button type="submit" fullWidth>
               Зарегистрироваться
            </Button>
         </form>

         <p className="text-center underline pt-3">
            <Link to="/login">Вход</Link>
         </p>
      </div>
   )
}

export default SingUp
