import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import CatalogPage from "../Pages/CatalogPage/CatalogPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Pages/RegisterPage/RegisterPage";
import ErrorTestPage from "../Pages/ErrorPages/ErrorTestPage";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import BasketPage from "../Pages/BasketPage/BasketPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: '/catalog', element: <CatalogPage />},
            {path: '/catalog/:id', element: <ProductDetailsPage />},
            {path: '/basket', element: <BasketPage />},
            {path: '/login', element: <LoginPage />},
            {path: '/register', element: <Register />},
            {path: '/errortest', element: <ErrorTestPage />},
            {path: '/error/:id', element: <ErrorPage />},
        ]
    }
])