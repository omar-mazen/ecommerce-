import { useState } from "react";
import useClickOutside from "../Hooks/useClickOutside";
import ArrowDropUpIcon from "../Icons/ArrowDropUpIcon";
import SearchIcon from "../Icons/SearchIcon";

export default function SelectOption({
  selectedValue,
  setSelectedValue,
  options = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState("");
  const ref = useClickOutside("click", () => setIsOpen(false));
  return (
    <div ref={ref} className="w-72 max-h-80 text-small space-y-3 select-none">
      <div
        onClick={() => setIsOpen((status) => !status)}
        className={` bg-secondary-background px-6 py-3 flex items-center justify-between cursor-pointer ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
      >
        <span
          className={`${
            selectedValue
              ? " opacity-100 font-medium capitalize"
              : " text-small opacity-75"
          }`}
        >
          {selectedValue || "select categories"}
        </span>
        <span className={`${isOpen ? "rotate-180" : ""} opacity-75`}>
          <ArrowDropUpIcon />
        </span>
      </div>
      {isOpen && (
        <ul className="bg-secondary-background rounded-b-lg overflow-y-auto max-h-60">
          <div className="relative">
            <input
              type="text"
              className=" w-full pl-11 pr-2 py-2 bg-secondary-background border-b border-text/20 outline-none focus:ring-[1px] focus:ring-primary-color"
              placeholder="search for "
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <span className=" absolute top-1/2 left-6 translate-x-[-50%] translate-y-[-50%] ">
              <SearchIcon size={13} />
            </span>
          </div>
          {options
            .filter((option) => option.startsWith(searchString))
            .map((option, i) => (
              <li
                key={i}
                className="last:border-b-0 border-b border-text/20 px-6 py-2 hover:bg-primary-color cursor-pointer ease-in-out duration-100 transition-all"
                onClick={() => {
                  setSelectedValue(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
