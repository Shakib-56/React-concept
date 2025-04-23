import { StrictMode, Suspense } from 'react'
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
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
const UsersPromise=fetch('https://jsonplaceholder.typicode.com/users').then(
  res=>res.json()
);

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
      },{
        path:"users2",
        element:<Suspense fallback={<span>Loading....</span>}>
          <Users2 UsersPromise={UsersPromise}></Users2>
        </Suspense>
      },
      {
        path:'user/:userId',
        loader:({params})=>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component:UserDetails,
      },
      // {
      //   path:"*",
      //   element:<h2>Error.Your url is not found</h2>
      // }
    ]
    
  },
  {
    path:"*",
    element:<h2 className='text-center text-4xl font-bold mx-auto my-20'> Not found :404 Status</h2>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
