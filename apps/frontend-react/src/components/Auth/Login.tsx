import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
   return (
      <div className="max-w-md mx-auto my-6 bg-slate-200 p-4 lg:p-6 rounded-lg shadow-md">
         <h1 className="underline decoration-blue-500">Вход</h1>

         <p className="text-center underline pt-3">
            <Link to="/signup">Регистрация</Link>
         </p>
         <p className="text-center underline pt-3">
            <Link to="/reset-password">Сброс пароля</Link>
         </p>
      </div>
   )
}

export default Login
