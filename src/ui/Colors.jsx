import { useSearchParams } from "react-router-dom";
const colors = [
  { name: "white", color: "[#fff]" },
  { name: "gray", color: "gray-500" },
  { name: "black", color: "[#000]" },
  { name: "orange", color: "orange-500" },
  { name: "green", color: "green-500" },
  { name: "blue", color: "blue-500" },
];
export default function Colors() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlColors = searchParams.getAll("color");
  function handleColors(color) {
    if (urlColors?.includes(color)) searchParams.delete("color", color);
    else searchParams.append("color", color);
    setSearchParams(searchParams);
  }
  return (
    <ul className="flex items-center gap-8">
      {colors.map((color) => (
        <li
          key={Math.random()}
          className={`h-16 w-16 bg-${color.color} rounded-full outline-none  ${
            urlColors?.includes(color.name)
              ? "border-2 border-primary-light "
              : ""
          }`}
          aria-placeholder={color.name}
          onClick={() => handleColors(color.name)}
        ></li>
      ))}
    </ul>
  );
}
