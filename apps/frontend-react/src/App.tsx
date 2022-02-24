import React from 'react'
import './App.css'
import Playground from '@components/Playground'
import { Routes, Route } from 'react-router-dom'
import Layout from '@components/Layout/Layout'
import Main from '@components/Main/Main'
import AllCourses from '@components/Courses/AllCourses'
import Login from '@components/Auth/Login'
import Signup from '@components/Auth/Signup'
import RequestResetPassword from '@components/Auth/RequestResetPassword'
import ResetPassword from '@components/Auth/ResetPassword'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="playground" element={<Playground />} />
            <Route path="courses" element={<AllCourses />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<RequestResetPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
         </Route>
      </Routes>
   )
}

export default App
