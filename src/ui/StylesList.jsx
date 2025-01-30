import { useSearchParams } from "react-router-dom";

export default function StylesList({ styles }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const styleURL = searchParams.get("style") || "all";
  return (
    <ul className="h-full flex flex-row items-center gap-3 whitespace-nowrap overflow-y-auto w-full bg-primary-background col-start-1 col-end-3 row-start-1">
      {styles.map((style, i) => (
        <li
          key={i}
          className={`py-1 px-6 border border-text rounded-full cursor-pointer ${
            styleURL == style ? "bg-text text-primary-background " : ""
          }`}
          onClick={() => {
            searchParams.set("style", style);
            setSearchParams(searchParams);
          }}
        >
          {style}
        </li>
      ))}
    </ul>
  );
}
