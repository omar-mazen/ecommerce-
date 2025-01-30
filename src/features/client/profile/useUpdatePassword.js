import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePassword as apiUpdatePassword } from "../../../services/user";

export default function useUpdatePassword() {
  const { mutate: updatePassword, isPending: isLoading } = useMutation({
    mutationFn: apiUpdatePassword,
    onSuccess: () =>
      toast.success("Your password has been changed successfully."),
    onError: (error) =>
      toast.error(
        error.message ||
          "Oops! Something went wrong. Unable to change your password. Please try again later."
      ),
  });
  return { updatePassword, isLoading };
}
