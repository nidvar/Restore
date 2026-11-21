import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../HomePage/HomePage";
import CatalogPage from "../CatalogPage/CatalogPage";
import ProductDetailsPage from "../ProductDetailsPage/ProductDetailsPage";
import LoginPage from "../LoginPage/LoginPage";
import Register from "../RegisterPage/RegisterPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: '/catalog', element: <CatalogPage />},
            {path: '/catalog/:id', element: <ProductDetailsPage />},
            {path: '/login', element: <LoginPage />},
            {path: '/register', element: <Register />},
        ]
    }
])