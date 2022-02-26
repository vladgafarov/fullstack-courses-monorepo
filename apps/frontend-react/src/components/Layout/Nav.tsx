import { useUser } from '@lib/useUser'
import { Menu } from '@mantine/core'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'ui'

const Nav = () => {
   const navigate = useNavigate()
   const user = useUser()
   console.log(user)

   return (
      <div className="flex items-center space-x-3">
         <Link to="/courses" className="font-proxima-medium">
            Курсы
         </Link>
         <div className="space-x-3">
            {user ? (
               <Menu
                  control={
                     <h2 className="hover:underline hover:decoration-green-500">
                        {user.name} {user.lastName}
                     </h2>
                  }
                  transition="rotate-right"
               >
                  <Menu.Item
                     onClick={() => navigate('/profile')}
                     className="hover:bg-blue-100"
                  >
                     Профиль
                  </Menu.Item>
                  <Menu.Item className="hover:bg-blue-100">Выйти</Menu.Item>
               </Menu>
            ) : (
               <>
                  <Button onClick={() => navigate('/login')}>Вход</Button>
                  <Button onClick={() => navigate('/signup')} variant="outline">
                     Регистрация
                  </Button>
               </>
            )}
         </div>
      </div>
   )
}

export default Nav
