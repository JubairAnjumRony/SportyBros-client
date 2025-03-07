import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Root from './Root/Root.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AddEquipment from './pages/AddEquipment.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import AllEquipment from './pages/AllEquipment.jsx';
import Details from './pages/Details.jsx';
import MyEquipmentList from './pages/MyEquipmentList.jsx';
import { ToastContainer } from 'react-toastify';
import UpdateEquipments from './pages/UpdateEquipments.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: < Home/>,
        loader: () => fetch('https://server-side-alpha-rust.vercel.app/allequipments'),
      },
    
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/register",
      element: <Register></Register>
    },
    {
      path:"/addequipments",
      element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>,
      
    },
    {
    path:"/allequipments",
    element:<AllEquipment></AllEquipment>,
    loader: () => fetch('https://server-side-alpha-rust.vercel.app/allequipments'),
    },
    {
      path:"/details/:id",
      element:<PrivateRoute><Details></Details></PrivateRoute>,
      loader: ({params}) => fetch(`https://server-side-alpha-rust.vercel.app/details/${params.id}`),

    },

    {
      path:"/myequipments",
      element:<PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>,
     
    },

    {
      path:"/updateequipment/:id",
      element:<PrivateRoute><UpdateEquipments></UpdateEquipments></PrivateRoute>,
      loader: ({params}) => fetch(`https://server-side-alpha-rust.vercel.app/updateequipment/${params.id}`),
    }





  ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
   
       <RouterProvider router = {router}/>
       <ToastContainer />
  </AuthProvider>
  </StrictMode>,
)
