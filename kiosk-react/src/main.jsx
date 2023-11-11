import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import Switcher from '../src/components/Switcher'
import { KioskProvider } from './context/KioskProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Switcher />
    <KioskProvider>
      <RouterProvider router={router} />
    </KioskProvider>
  </React.StrictMode>,
)
