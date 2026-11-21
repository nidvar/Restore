import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../HomePage/HomePage";
import CatalogPage from "../Catalog/CatalogPage";
import ProductDetailsPage from "../ProductDetailsPage/ProductDetailsPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: '/catalog', element: <CatalogPage />},
            {path: '/catalog/:id', element: <ProductDetailsPage />},
        ]
    }
])