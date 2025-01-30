import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProfilePicture as apideleteProfilePicture } from "../../../services/user";

export default function useDeleteProfilePicture() {
  const { mutate: deleteProfilePicture, isPending: isLoading } = useMutation({
    mutationFn: apideleteProfilePicture,
    onSuccess: () => {
      {
        toast.success("Your profile picture has been deleted successfully.");
      }
    },
    onError: (error) =>
      toast.error(
        error.message ||
          "Oops! Something went wrong. Unable to delete your profile picture. Please try again later."
      ),
  });
  return { deleteProfilePicture, isLoading };
}
