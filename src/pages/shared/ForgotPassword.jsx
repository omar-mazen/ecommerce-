import { Outlet } from "react-router";

export default function ForgotPassword() {
  return (
    <div className="grid content-center h-full justify-center mt-16 mx-4">
      <h2 className=" text-4xl font-bold mb-20">Forgot password</h2>
      <Outlet />
    </div>
  );
}
