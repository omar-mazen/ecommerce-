import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateProfilePicture as apiUpdateProfilePicture } from "../../../services/user";

export default function useUpdateProfilePicture() {
  const { mutate: updateProfilePicture, isPending: isLoading } = useMutation({
    mutationFn: apiUpdateProfilePicture,
    onSuccess: () => {
      {
        toast.success("Your profile picture has been updated successfully.");
      }
    },
    onError: (error) =>
      toast.error(
        error.message ||
          "Oops! Something went wrong. Unable to update your profile picture. Please try again later."
      ),
  });
  return { updateProfilePicture, isLoading };
}
