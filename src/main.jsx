import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './App.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import Statistics from './Components/Satistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { GadgetProvider } from './Components/GadgetContext/GadgetContext';
import GadgetDetails from './Components/GadgetDetails/GadgetDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/gadgetdetails/:id',
        element: <GadgetDetails></GadgetDetails>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GadgetProvider>
      <RouterProvider router={router} />
    </GadgetProvider>
  </StrictMode>,
)
