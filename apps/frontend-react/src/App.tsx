import React from 'react'
import './App.css'
import Playground from './components/Playground'
import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Main from './components/Main/Main'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="playground" element={<Playground />} />
         </Route>
      </Routes>
   )
}

export default App
