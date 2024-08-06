import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Navbar/Home/Home.jsx'
import Menu from './Components/Navbar/Home/Menu.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/Menu',
        element: <Menu></Menu>,
        loader: ()=>{return fetch('../public/foods.json')}
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
   </RouterProvider>
  </React.StrictMode>,
)
