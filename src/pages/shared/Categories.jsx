import { Outlet } from "react-router";
import CategoriesTab from "../../features/shared/categories/CategoriesTab";
import Header from "../../ui/Header";

export default function Categories() {
  console.log("categories");
  return (
    <>
      <Header>Categories</Header>
      <div className="mx-4">
        <CategoriesTab />
        <Outlet />
      </div>
    </>
  );
}
