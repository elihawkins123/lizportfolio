import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
const Router= createBrowserRouter([
  {
    path: '/',
    action: () => {
      return <App />
    },
  },
  {
    path: '/about',
    action: () => {
      return <h1>About</h1>
    },
  },
  {
    path: '/contact',
    action: () => {
      return <h1>Contact</h1>
    },
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
