import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserById } from "../../../services/user";
import { useAuth } from "../../../context/Auth";

export default function useUser() {
  const queryClient = useQueryClient();
  const { auth } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserById(auth?.id),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
    },
  });
  return { user: data, isLoading };
}
