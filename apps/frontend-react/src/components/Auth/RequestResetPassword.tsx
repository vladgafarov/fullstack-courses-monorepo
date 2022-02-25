import { useForm } from '@mantine/hooks'
import { Link } from 'react-router-dom'
import { Button, Input } from 'ui'

const RequestResetPassword = () => {
   const form = useForm({
      initialValues: {
         email: '',
      },
      validationRules: {
         email: (value: string) => /^\S+@\S+$/.test(value),
      },
      errorMessages: {
         email: 'Неверный email',
      },
   })

   const handleSubmit = value => {
      console.log(value)
   }

   return (
      <div className="max-w-md mx-auto my-6 bg-slate-200 p-4 lg:p-6 rounded-lg shadow-md">
         <h1 className="underline decoration-blue-500">Сброс пароля</h1>
         <p>После запроса вы получите письмо для сброса пароля</p>

         <form
            onSubmit={form.onSubmit(handleSubmit)}
            className="space-y-3 mt-4"
         >
            <Input
               label="Почта"
               type="email"
               {...form.getInputProps('email')}
            />

            <Button type="submit" fullWidth>
               Отправить запрос
            </Button>
         </form>

         <p className="text-center underline pt-3">
            <Link to="/login">Вход</Link>
         </p>
      </div>
   )
}

export default RequestResetPassword
