import { useMutation } from "@tanstack/react-query";
import { signup as apiSignup } from "../../../services/auth";
import toast from "react-hot-toast";

export default function useSignup() {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: apiSignup,
    onSuccess: () =>
      toast.success("Success! Please verify your email to complete sign-up"),
    onError: (error) => toast.error(error.message),
  });
  return { signup, isLoading };
}
