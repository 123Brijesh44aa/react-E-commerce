import "./App.css"
import logo from "./logo.svg"
import ProductList from "./features/product-list/ProductList";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

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
