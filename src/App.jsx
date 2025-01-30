import Loader from "./ui/loader";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "./context/Theme";
import { AuthProvider } from "./context/Auth";
const AppLayout = lazy(() => import("./ui/AppLayout"));
import PromoCodesList from "./ui/PromoCodesList";
import EditProfile from "./pages/client/EditProfile";
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
import ForgotPasswordEmailForm from "./features/shared/authentication/ForgotPasswordEmailForm";
import ForgotPasswordNewPasswordForm from "./features/shared/authentication/ForgotPasswordNewPasswordForm";
import { ToastContainer } from "react-toastify";
import { jsonServer } from "./services/axios";
const Login = lazy(() => import("./pages/shared/Login"));
const Signup = lazy(() => import("./pages/shared/Signup"));

const ForgotPassword = lazy(() => import("./pages/shared/ForgotPassword"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route index element={<Navigate replace to="/home" />} />
                  <Route path="home" element={<Home />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="categories" element={<Categories />}>
                    <Route index element={<Navigate replace to="women" />} />
                    <Route
                      path=":category"
                      element={<CategoriesList />}
                    ></Route>
                  </Route>
                  <Route
                    path="categories/:category/:subcategory/"
                    element={<SubCategories />}
                  />
                  <Route
                    path="categories/:category/:subcategory/:catalog"
                    element={<Catalog />}
                  />
                  {/* client */}
                  <Route path="/" element={<ProtectedRoute />}>
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="cart/checkout" element={<CheckOut />} />
                    <Route path="cart/checkout/success" element={<Success />} />
                    <Route path="profile">
                      <Route index element={<Profile />} />
                      <Route path="editProfile" element={<EditProfile />} />
                      <Route path="orders" element={<Orders />} />
                      <Route path="order" element={<Order />} />
                      <Route
                        element={<ShippingAddresses />}
                        path="shippingAddresses"
                      />
                      <Route path="promoCodes" element={<PromoCodes />}>
                        <Route
                          index
                          element={<Navigate replace to="unused" />}
                        />
                        <Route
                          path=":status"
                          element={<PromoCodesList buttonType="copy" />}
                        />
                      </Route>
                      <Route path="paymentMethod" element={<PaymentMehod />} />
                      <Route path="myReviews" element={<MyReviews />} />
                      <Route path="notifications" element={<Notifications />} />
                    </Route>
                  </Route>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgotpassword" element={<ForgotPassword />}>
                    <Route index element={<ForgotPasswordEmailForm />} />
                    <Route
                      path="enterNewPassword"
                      element={<ForgotPasswordNewPasswordForm />}
                    />
                  </Route>
                  <Route path="product/:id" element={<Product />} />
                  <Route path="product/:id/reviews" element={<Reviews />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
