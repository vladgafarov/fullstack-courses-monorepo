import { useLogOutMutation } from '@api/generated'
import { useUser } from '@lib/useUser'
import { Menu } from '@mantine/core'
import React from 'react'
import { useQueryClient } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'ui'

const Nav = () => {
   const navigate = useNavigate()
   const { user } = useUser()

   const queryClient = useQueryClient()

   const { mutate, error, isLoading } = useLogOutMutation({
      onSuccess: () => {
         queryClient.invalidateQueries('CurrentUser')
      },
   })

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
                  <Menu.Item
                     onClick={() => {
                        mutate(null)
                     }}
                     className="hover:bg-blue-100"
                  >
                     Выйти
                  </Menu.Item>
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
