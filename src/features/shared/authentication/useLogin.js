import { useMutation } from "@tanstack/react-query";
import { login as apiLogin } from "../../../services/auth";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/Auth";
import { setCookie } from "../../../util/helper";
import { useNavigate } from "react-router";

export default function useLogin() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: apiLogin,
    onSuccess: async ({ refresh_token, token, role, userId }) => {
      setCookie("refresh_token", refresh_token);
      localStorage.setItem("user", JSON.stringify({ token, role, id: userId }));
      setAuth({ isAuth: true, role, id: userId });
      if (window.location.pathname.includes("login")) navigate("/");
    },
    onError: (error) =>
      toast.error(
        error.message ||
          "Login failed. Please check your credentials and try again."
      ),
  });
  return { login, isLoading };
}
