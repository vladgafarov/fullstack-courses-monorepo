import { useParams } from 'react-router-dom'

const ResetPassword = () => {
   const { token } = useParams()

   return (
      <div className="max-w-md mx-auto my-6 bg-slate-200 p-4 lg:p-6 rounded-lg shadow-md">
         <h1 className="underline decoration-blue-500">Сброс пароля</h1>
      </div>
   )
}

export default ResetPassword
