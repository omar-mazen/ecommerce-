import { format } from "date-fns";

export default function CategoryMoreDetails({ category }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-x-10 items-center rounded-lg overflow-x-hidden overflow-y-auto">
      <span className="px-4 py-2 text-nowrap text-gray">id</span>
      <span className="px-4 py-2 text-wrap break-all">{category.id}</span>
      <span className="px-4 py-2 text-nowrap text-gray">name</span>
      <span className="px-4 py-2">{category.name}</span>
      <span className="px-4 py-2 text-nowrap text-gray">sub categories</span>
      <div className="px-4 py-2 flex flex-wrap gap-2">
        {category?.subcategory?.length > 0
          ? category.subcategory?.map((subcategory) => (
              <span
                className=" bg-text/20 px-3 rounded-lg"
                key={subcategory.id}
              >
                {subcategory.name}
              </span>
            ))
          : "_"}
      </div>
      <span className="px-4 py-2 text-nowrap text-gray">created by</span>
      <span className="px-4 py-2">{category.createdBy.userName}</span>
      <span className="px-4 py-2 text-nowrap text-gray">created at</span>
      <div className="px-4 py-2 flex flex-col">
        {format(category.createdAt, "dd/MM/yy - hh:mm:ss")
          .split("-")
          .map((val, i) => (
            <span key={i}>{val}</span>
          ))}
      </div>
      <span className="px-4 py-2 text-nowrap text-gray">updated at</span>
      <div className="px-4 py-2 flex flex-col">
        {format(category.updatedAt, "dd/MM/yy - hh:mm:ss")
          .split("-")
          .map((val, i) => (
            <span key={i}>{val}</span>
          ))}
      </div>
    </div>
  );
}
