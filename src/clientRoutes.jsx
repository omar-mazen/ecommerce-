import { lazy } from "react";
import PromoCodesList from "./ui/PromoCodesList";
import EditProfile from "./pages/client/EditProfile";
import { Navigate, Route } from "react-router";
import useMobileScreen from "./Hooks/useMobileScreen";
import Home from "./pages/shared/Home";
import Categories from "./pages/shared/Categories";
import CategoriesList from "./features/shared/categories/CategoriesList";
import SubCategories from "./pages/shared/SubCategories";
import Catalog from "./pages/shared/Catalog";
import ProtectedRoute from "./ui/ProtectedRoute";
import Product from "./pages/client/Product";
import Reviews from "./pages/client/Reviews";
const Favorites = lazy(() => import("./pages/client/Favorites"));
const Profile = lazy(() => import("./pages/client/Profile"));
const PaymentMehod = lazy(() => import("./pages/client/PaymentMehod"));
const CheckOut = lazy(() => import("./pages/client/CheckOut"));
const ShippingAddresses = lazy(() =>
  import("./pages/client/ShippingAddresses")
);
const Success = lazy(() => import("./pages/client/Success"));
const MyReviews = lazy(() => import("./pages/client/MyReviews"));
const PromoCodes = lazy(() => import("./pages/client/PromoCodes"));
const Order = lazy(() => import("./pages/client/Order"));
const Orders = lazy(() => import("./pages/client/Orders"));
const Notifications = lazy(() => import("./pages/client/Notifications"));
const Cart = lazy(() => import("./pages/client/Cart"));

export const clientPrivateRoutes = (
  <>
    <Route path="favorites" element={<Favorites />} />
    <Route path="cart" element={<Cart />} />
    <Route path="cart/checkout" element={<CheckOut />} />
    <Route path="cart/checkout/success" element={<Success />} />
    <Route path="profile">
      <Route index element={<Profile />} />
      <Route path="editProfile" element={<EditProfile />} />
      <Route path="orders" element={<Orders />} />
      <Route path="order" element={<Order />} />
      <Route element={<ShippingAddresses />} path="shippingAddresses" />
      <Route path="promoCodes" element={<PromoCodes />}>
        <Route index element={<Navigate replace to="unused" />} />
        <Route path=":status" element={<PromoCodesList buttonType="copy" />} />
      </Route>
      <Route path="paymentMethod" element={<PaymentMehod />} />
      <Route path="myReviews" element={<MyReviews />} />
      <Route path="notifications" element={<Notifications />} />
    </Route>
  </>
);
export default function ClientPublicRoute() {
  // const isMobile = useMobileScreen();
  return <Route path="/home" element={<p>home</p>}></Route>;
}
