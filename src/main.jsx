import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/root/Root.jsx';
import Home from './components/root/Home/Home.jsx';
import Mobiles from './components/root/Mobiles/Mobiles.jsx';
import Laptops from './components/root/Laptops/Laptops.jsx';
import Users from './components/root/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:"mobiles",Component:Mobiles}
      ,{path:"laptops",Component:Laptops},{
        path:"users"  ,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
