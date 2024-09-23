import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import Mainlayout from "../mainlayout/Mainlayout"
import { lazy, Suspense } from "react";
const Homepage=lazy(()=> import ("../pages/Homepage"))
const Login=lazy(()=> import ("../pages/login"))
const Registur=lazy(()=> import ("../pages/registur"))
const Contactus=lazy(()=> import ("../pages/contactus/contactus"))
const AllProducts=lazy(()=> import ("../pages/Allproducts/AllProducts"))
const Product=lazy(()=> import ("../pages/Product/Product"))
const Cartpage=lazy(()=> import ("../pages/cartpage/Cartpage"))
import Error from "../pages/Errorpage/Error"
import Loattehandler from "../lottie/Lottiehandler";
import Protectedrouters from "../components/auth/protectedroutes";

const route=createBrowserRouter([{

    path :"/",
    element:<Mainlayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:  <Suspense fallback={<Loattehandler types="loading"/>}>
        <Homepage/>
    </Suspense>

      },
      {
        path:"login",
        element:  

        <Suspense fallback={<Loattehandler types="loading"/>}>
        <Login/>
    </Suspense>
        
      },
      {
        path:"registure",
        element: 

        <Suspense fallback={<Loattehandler types="loading"/>}>
        <Registur/>
    </Suspense>
      
        
      },
      {
        path:"cartpage",
        element: <Protectedrouters>

         <Suspense fallback={<Loattehandler types="loading"/>}>
        <Cartpage/>
    </Suspense>
        </Protectedrouters> 
      },
      
      {
        path:"contact-us",
        element:  <Suspense fallback={<Loattehandler types="loading"/>}>
        <Contactus/>
    </Suspense>
      },
      {
        path:"all-products",
        element:  <Suspense fallback={<Loattehandler types="loading"/>}>
        <AllProducts/>
    </Suspense>
      },
      {
        path:"product/:prefix",
        element:  <Suspense fallback={<Loattehandler types="loading"/>}>
        <Product/>
    </Suspense>,
        loader :({params})=>{

          if(typeof params.prefix !=="string"||
          !/^[a-z]+$/i.test(params.prefix)){

              throw new Response("bad request ",{
                  statusText :"product not found",
                  status: 400,
              });
          }
          return true;

      },
      }
    ]
    
}])
const Approuter = () => {
  return (
  <RouterProvider router={route}/>
  )
}

export default Approuter
