import { useState } from "react";

export default function Search({ close }) {
  const [query, setQuery] = useState("");
  return (
    <div className=" w-full flex items-center justify-center gap-5 mx-4">
      {close && (
        <span onClick={close} className=" cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      )}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-secondary-background px-6 py-2 rounded-full focus:outline outline-[1px] focus:outline-primary-color focus:outline-offset-2"
        />
        {query.length > 0 ? (
          <span
            className=" absolute top-1/2 right-2 translate-y-[-50%] bg-[rgb(0,0,0,0.1)] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() => setQuery("")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="15px"
              width="15px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
            </svg>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
