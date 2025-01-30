import { Link, useParams } from "react-router-dom";
import Header from "../../ui/Header";
const subCategories = [
  "Tops",
  "Shirt & Blouse",
  "Cardigans & Sweaters",
  "Knitwear",
  "Blazers",
  "Outerwear",
  "Pants",
  "Jeans",
  "Shorts",
  "Skirts",
  "Dresses",
];
export default function SubCategories() {
  const { category } = useParams();
  console.log("sub categories");
  return (
    <>
      <Header>{category}</Header>
      <ul className=" divide-y-[1px] divide-gray divide-opacity-10">
        {subCategories.map((category, i) => (
          <li
            key={i}
            className="py-5 px-16 text-2xl cursor-pointer capitalize "
          >
            <Link to={category}>{category}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
