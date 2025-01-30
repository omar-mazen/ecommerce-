import { useState } from "react";
import Search from "./Search";
import useMobileScreen from "../Hooks/useMobileScreen";

export default function Header({ children, type = "search" }) {
  const [isSearching, setIsSearching] = useState(false);
  const isMobile = useMobileScreen();
  if (isMobile)
    return (
      <div className="sticky top-0 left-0 flex flex-row items-center justify-between h-24 bg-primary-background dark:bg-background-dark z-10 ">
        {isSearching ? (
          <Search close={() => setIsSearching(false)} />
        ) : (
          <>
            <span
              className=" cursor-pointer p-4"
              onClick={() => history.back()}
            >
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
            <h1
              className="text-ellipsis text-nowrap whitespace-nowrap max-w-[200px] overflow-hidden text-3xl"
              title={children}
            >
              {children}
            </h1>
            <span
              className="p-4 cursor-pointer"
              onClick={() => setIsSearching(true)}
            >
              {type == "search" ? (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z"></path>
                </svg>
              )}
            </span>
          </>
        )}
      </div>
    );
}
