import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import Playground from '@components/Playground'
import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from '@components/Layout/Layout'
import Main from '@components/Main/Main'
import AllCourses from '@components/Courses/AllCourses'
import Login from '@components/Auth/Login'
import Signup from '@components/Auth/Signup'
import RequestResetPassword from '@components/Auth/RequestResetPassword'
import ResetPassword from '@components/Auth/ResetPassword'
import { QueryClient, QueryClientProvider } from 'react-query'
import Course from '@components/Course/Course'
import Profile from '@components/Profile/Profile'
import RequireAuth from '@components/Auth/RequireAuth'
import UserCourses from '@components/Profile/UserCourses'
import UserReviews from '@components/Profile/UserReviews'

const queryClient = new QueryClient()

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Main />} />
               <Route path="playground" element={<Playground />} />
               <Route path="courses" element={<AllCourses />} />
               <Route path="course/:id" element={<Course />} />

               {/* Auth */}
               <Route path="login" element={<Login />} />
               <Route path="signup" element={<Signup />} />
               <Route
                  path="reset-password"
                  element={<RequestResetPassword />}
               />
               <Route
                  path="reset-password/:token"
                  element={<ResetPassword />}
               />

               {/* Profile */}
               <Route
                  path="/"
                  element={
                     <RequireAuth>
                        <Outlet />
                     </RequireAuth>
                  }
               >
                  <Route path="profile" element={<Profile />} />
                  <Route path="profile/courses" element={<UserCourses />} />
                  <Route path="profile/reviews" element={<UserReviews />} />
               </Route>
            </Route>
         </Routes>
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   )
}

export default App
