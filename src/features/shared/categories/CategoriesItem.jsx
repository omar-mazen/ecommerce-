import { Link } from "react-router-dom";

export default function CategoriesItem({ category }) {
  const { id = 2, name, image } = category;

  return (
    <li key={id}>
      <Link
        to={`${name}`}
        className=" h-28 flex flex-row w-full items-center justify-between bg-darkgray rounded-xl"
      >
        <span className="p-8">{name}</span>
        <img
          src={image}
          alt={`${name} category image`}
          className=" h-full w-[150px]  object-cover bg-background-dark bg-top rounded-e-xl"
        />
      </Link>
    </li>
  );
}
