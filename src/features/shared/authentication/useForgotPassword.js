import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { forgotPassword as apiForgotPassword } from "../../../services/auth";

export default function useForgotPassword() {
  const { mutate: forgotPassword, isPending: isLoading } = useMutation({
    mutationFn: apiForgotPassword,
    onSuccess: () => toast.success("Success! Your new password has been set"),
    onError: (error) =>
      toast.error(
        error.message ||
          "Oops! Failed to set a new password. Please try again later."
      ),
  });
  return { forgotPassword, isLoading };
}
