import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import apolloimg from "/apollo.jpg"
import { RouterProvider } from 'react-router-dom'
import { Router } from './router'

function App() {
  const router = Router()
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
