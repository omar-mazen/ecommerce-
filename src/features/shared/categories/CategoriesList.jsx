import CategoriesItem from "./CategoriesItem";
import useCategories from "./useCategories";
import Loader from "../../../ui/loader";

const categories = [
  { id: "catalog 1", name: "catalog 1", img: "../../../banner 2.png" },
  { id: "catalog 2", name: "catalog 2", img: "../../../banner 2.png" },
  { id: "catalog 3", name: "catalog 3", img: "../../../banner 2.png" },
  { id: "catalog 4", name: "catalog 4", img: "../../../banner 2.png" },
];
export default function CategoriesList() {
  // const { categories, isLoading } = useCategories();
  console.log("categories Lists", categories);
  // if (isLoading) return <Loader />;
  return (
    <ul className="flex flex-col gap-5">
      {categories?.map((category) => (
        <CategoriesItem key={category.id} category={category} />
      ))}
    </ul>
  );
}
