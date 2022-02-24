import React from 'react'
import { Link } from 'react-router-dom'

const SingUp = () => {
   return (
      <div className="max-w-md mx-auto my-6 bg-slate-200 p-4 lg:p-6 rounded-lg shadow-md">
         <h1 className="underline decoration-blue-500">Регистрация</h1>

         <p className="text-center underline pt-3">
            <Link to="/login">Вход</Link>
         </p>
      </div>
   )
}

export default SingUp
