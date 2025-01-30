import { Link, useNavigate } from "react-router-dom";
import SignupForm from "../../features/shared/authentication/SignupForm";
import SocialMedia from "../../ui/SocialMedia";

import { useEffect } from "react";
import { useAuth } from "../../context/Auth";
export default function Signup({ modal = false, setContent }) {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuth) navigate("/", { replace: true });
  }, [auth.isAuth]);
  return (
    <div className="container grid content-center grid-cols-[repeat(1,minmax(250px,500px))] h-full justify-center mt-16">
      <div>
        <h2 className=" text-4xl font-bold mb-20">Sign up</h2>
        <SignupForm />
        <div className=" mt-10 text-center"></div>
      </div>
      <div>
        <span className="relative block text-center before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-[40%] before:bg-gray before:opacity-20 before:translate-y-[50%] $ after:absolute after:top-1/2 after:right-0 after:h-[1px] after:w-[40%] after:bg-gray after:opacity-20 after:translate-y-[50%]">
          Or
        </span>
        <p className=" text-center text-xl px-8 py-4">
          sign up with social account
        </p>
        <SocialMedia />
      </div>
      <p className="text-xl text-center py-4">
        {"Already have an account ? "}
        {modal ? (
          <span
            className=" text-primary-light dark:text-primary-dark cursor-pointer"
            onClick={() => setContent("login")}
          >
            login
          </span>
        ) : (
          <Link to={"/login"} className=" inline-block ">
            <span className=" text-primary-light dark:text-primary-dark ">
              login
            </span>
          </Link>
        )}
      </p>
    </div>
  );
}
