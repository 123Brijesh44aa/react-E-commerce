import "./App.css"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetail from "./features/product/components/ProductDetail";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/sign-in",
        element: <LoginPage/>
    },
    {
        path: "/sign-up",
        element: <SignupPage/>
    },
    {
        // only for testing - then cart page will be added
        path: "/cart",
        element: <CartPage/>
    },
    {
        path: "/checkout",
        element: <CheckoutPage/>
    },
    {
        path: "/product-detail",
        element: <ProductDetailPage/>
    }
]);

const App = () => {

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
