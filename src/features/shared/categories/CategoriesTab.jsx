import { NavLink } from "react-router-dom";

const gender = [
  { id: 1, name: "Women" },
  { id: 2, name: "Men" },
  { id: 3, name: "Kids" },
];
export default function CategoriesTab() {
  return (
    <ul className="flex flex-row justify-between py-4">
      {gender.map((gender) => (
        <li key={gender.id} className="px-4 py-2 relative text-gray">
          <NavLink
            className={`aria-[current="page"]:text-white aria-[current="page"]:after:absolute aria-[current="page"]:after:bottom-0 aria-[current="page"]:after:left-0 aria-[current="page"]:after:w-full aria-[current="page"]:after:h-[3px] aria-[current="page"]:after:bg-primary-light dark:aria-[current="page"]:after:bg-primary-dark`}
            to={gender.name}
          >
            {gender.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
