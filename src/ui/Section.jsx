import { Link } from "react-router-dom";
import Card from "./Card";

export default function Section({ data, link }) {
  const { title, clothes } = data;
  return (
    <section className="">
      <div className="flex flex-row items-center justify-between mb-8">
        <header className=" capitalize font-bold text-4xl ">{title}</header>
        {link && (
          <Link
            to={link}
            className=" text-lg text-gray-light dark:text-gray-dark"
          >
            View all
          </Link>
        )}
      </div>
      <div className=" overflow-x-scroll overflow-y-hidden flex gap-5 py-5">
        {clothes.slice(0, 10).map((data) => (
          <Card data={data} key={Math.random()} />
        ))}
      </div>
    </section>
  );
}
