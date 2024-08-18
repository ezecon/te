import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Customer/Home";
import HomeAdmin from "../../Pages/Admin/Home";
import Products from "../Products/Products";
import AdminProducts from "../../Pages/Admin/Products/Products";
import Cart from "../Cart/Cart";
import SingleProduct from "../SingleProduct.jsx/SingleProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,

    },
    {
        path: "/check-product/:id",
        element: <SingleProduct/>,

    },
    {
        path: "/products",
        element: <Products/>,

    },
    {
        path: "/carts",
        element: <Cart/>,

    },
    {
        path: "/admin",
        element: <HomeAdmin/>,
        children: [
            {
                path:'',
                element:<AdminProducts/>
            }
        ]
    },
])

export default router;