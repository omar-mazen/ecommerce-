import { useSearchParams } from "react-router-dom";

export default function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSort = searchParams.get("sortby") || "popular";
  function handleSorting(sortby) {
    searchParams.set("sortby", sortby);
    setSearchParams(searchParams);
  }
  return (
    <ul className="flex flex-col w-full">
      <li
        className={`  p-4 text-2xl ${
          urlSort == "popular" ? "bg-primary-color text-primary-background" : ""
        }`}
        onClick={() => handleSorting("popular")}
      >
        Popular
      </li>
      <li
        className={`  p-4 text-2xl ${
          urlSort == "newest" ? "bg-primary-color text-primary-background" : ""
        }`}
        onClick={() => handleSorting("newest")}
      >
        Newest
      </li>
      <li
        className={`  p-4 text-2xl ${
          urlSort == "reviews" ? "bg-primary-color text-primary-background" : ""
        }`}
        onClick={() => handleSorting("reviews")}
      >
        Reviews
      </li>
      <li
        className={`  p-4 text-2xl ${
          urlSort == "price" ? "bg-primary-color text-primary-background" : ""
        }`}
        onClick={() => handleSorting("price")}
      >
        Price
      </li>
    </ul>
  );
}
