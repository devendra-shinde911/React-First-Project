import { createBrowserRouter } from "react-router-dom";
import App from "../component/App";
import Cart from "../component/Cart";
import Electronics from "../component/Electronics";
import Home from "../component/Home";
import Jewellery from "../component/Jewellery";
import Menscloth from "../component/Menscloth";
import Womencloth from "../component/Womencloth";


const router = createBrowserRouter([

   {
       path: '/',
       element: <App/>,

       children:[

           {
              path: '',
              element: <Home/>
           },

           {
            path: 'electronics',
            element: <Electronics/>
         },
         {
            path: 'jewellery',
            element: <Jewellery/>
           
         },
         {
            path: 'mens',
            element: <Menscloth/>
           
         },
         {
            path: 'womens',
            element:<Womencloth/>
           
         },
         {
            path: 'add-cart',
            element: <Cart/>
           
         },

       ]
   }

])

export default router;