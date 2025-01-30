import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendForgetCode as apiSendForgetCode } from "../../../services/auth";

export default function useSendForgotCode() {
  const { mutate: sendForgotCode, isPending: isLoading } = useMutation({
    mutationFn: apiSendForgetCode,
    onSuccess: () =>
      toast.success("Success! Code sent to your email. Check your inbox"),
    onError: (error) =>
      toast.error(
        error.message ||
          "Oops! Code sending failed. Please check your email address and try again."
      ),
  });
  return { sendForgotCode, isLoading };
}
