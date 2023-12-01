import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import RootRoute from '@/routes/Root'
import '@/styles/main.css'
import ErrorRoute from '@/routes/Error'
import ContactRoute from '@/routes/Contact'
import { contactLoader } from '@/routes/MockLoader'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute/>,
    errorElement: <ErrorRoute/>,
    loader: contactLoader,
    children: [
      {
        path: 'contacts/:contactId',
        element: <ContactRoute/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
