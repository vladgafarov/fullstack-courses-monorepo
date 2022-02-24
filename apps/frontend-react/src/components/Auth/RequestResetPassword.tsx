import { Link } from 'react-router-dom'

const RequestResetPassword = () => {
   return (
      <div className="max-w-md mx-auto my-6 bg-slate-200 p-4 lg:p-6 rounded-lg shadow-md">
         <h1 className="underline decoration-blue-500">Сброс пароля</h1>
         <p>После запроса вы получите письмо для сброса пароля</p>

         <p className="text-center underline pt-3">
            <Link to="/login">Вход</Link>
         </p>
      </div>
   )
}

export default RequestResetPassword
