import { useSearchParams } from "react-router-dom";
const sizes = ["XS", "S", "M", "L", "XL"];
export default function Sizes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSizes = searchParams.getAll("size");
  function handleSize(size) {
    if (searchParams.getAll("size").includes(size))
      searchParams.delete("size", size);
    else searchParams.append("size", size);
    setSearchParams(searchParams);
  }
  return (
    <ul className="flex items-center gap-8 text-xl font-semibold">
      {sizes.map((size) => (
        <li
          key={Math.random()}
          className={` flex justify-center items-center content-center rounded-lg border border-white w-12 h-12 ${
            urlSizes.includes(size)
              ? "border-0 bg-primary-light dark:bg-primary-dark text-background-light dark:text-background-dark"
              : ""
          } `}
          onClick={() => handleSize(size)}
        >
          {size}
        </li>
      ))}
    </ul>
  );
}
