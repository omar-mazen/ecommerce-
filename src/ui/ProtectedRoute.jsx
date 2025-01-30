import { Outlet, useLocation } from "react-router";
import Login from "../pages/shared/Login";
import { useAuth } from "../context/Auth";
import { toast } from "react-toastify";

export default function ProtectedRoute() {
  const {
    auth: { isAuth },
  } = useAuth();
  const { pathname } = useLocation();
  if (!isAuth && pathname != "/profile") {
    toast.warn("you should login first to access this page", {
      autoClose: false,
    });
  }
  return isAuth ? (
    <Outlet />
  ) : (
    <>
      <Login />
    </>
  );
  //  : (
  //   <>
  //     <Login />
  //   </>
}
