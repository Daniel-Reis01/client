import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'
//Pages
import { Phurshase } from './routes/Phurshase'
import Showcase from './routes/showcase/Showcase'
import Login from './routes/login/Login'
import Home from './routes/home/Home'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/:id",
        element:<Showcase />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/Purchase",
        element: <Phurshase />
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)