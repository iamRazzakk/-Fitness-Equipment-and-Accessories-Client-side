import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home";
import AboutUs from "@/pages/aboutUs/AboutUs";
import CategoriresCard from "@/pages/Home/CategoriresCard";
import ProductDetails from "@/components/ProductsDetails";
import Cart from "@/components/cart/Cart";
import Checkout from "@/components/cart/checkout/Checkout";
import OrderSuccess from "@/components/cart/checkout/OrderSuccess";
import ProductsManagements from "@/pages/ProductsManagements/ProductsManagements";
// import ProductDetails from "@/components/ProductsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <h1 className="flex items-center justify-center text-2xl font-bold">
        Error
      </h1>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/products",
        element: <CategoriresCard />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/products-managements",
        element: <ProductsManagements />,
      },
      {
        path: "/order-success",
        element: <OrderSuccess />,
      },
    ],
  },
]);
export default router;
