import { Route } from "react-router";
import ForgotPasswordEmailForm from "./features/shared/authentication/ForgotPasswordEmailForm";
import ForgotPasswordNewPasswordForm from "./features/shared/authentication/ForgotPasswordNewPasswordForm";
import { lazy } from "react";

const Login = lazy(() => import("./pages/shared/Login"));
const Signup = lazy(() => import("./pages/shared/Signup"));

const ForgotPassword = lazy(() => import("./pages/shared/ForgotPassword"));
export const authRoutes = (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/forgotpassword" element={<ForgotPassword />}>
      <Route index element={<ForgotPasswordEmailForm />} />
      <Route
        path="enterNewPassword"
        element={<ForgotPasswordNewPasswordForm />}
      />
    </Route>
  </>
);
