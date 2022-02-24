import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'ui'

const Nav = () => {
   const navigate = useNavigate()

   return (
      <div className="flex items-center space-x-3">
         <Link to="/courses" className="font-proxima-medium">
            Курсы
         </Link>
         <Link to="/playground">playground</Link>
         <div className="space-x-3">
            <Button onClick={() => navigate('/login')}>Вход</Button>
            <Button onClick={() => navigate('/signup')} variant="outline">
               Регистрация
            </Button>
         </div>
      </div>
   )
}

export default Nav
