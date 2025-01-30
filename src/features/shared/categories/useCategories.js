import { useQuery } from "@tanstack/react-query";
// import { getCategories } from "../../../services/categories";

export default function useCategories() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    // queryFn: getCategories,
  });
  return { categories: data, error, isLoading };
}
