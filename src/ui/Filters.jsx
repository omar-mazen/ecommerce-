import { useSearchParams } from "react-router-dom";
import Button from "../ui/Button";
import { useState } from "react";
import PriceRange from "./PriceRange";

const MIN_PRICE = 0;
const MAX_PRICE = 10000;
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = [
  { name: "white", bg: "bg-[#fff]" },
  { name: "gray", bg: "bg-slate-500" },
  { name: "black", bg: "bg-[#000]" },
  { name: "orange", bg: "bg-orange-500" },
  { name: "green", bg: "bg-green-500" },
  { name: "blue", bg: "bg-blue-500" },
];
const categories = ["all", "women", "men", "kids"];

export default function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [minVal, setMinVal] = useState(
    searchParams.get("minPrice") || MIN_PRICE
  );
  const [maxVal, setMaxVal] = useState(
    searchParams.get("maxPrice") || MAX_PRICE
  );

  const [selectedSize, setSelectedSize] = useState(searchParams.getAll("size"));
  const [selectedColor, setSelectedColor] = useState(
    searchParams.getAll("color")
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );

  const urlColors = searchParams.getAll("color");
  const urlSize = searchParams.getAll("size");

  function handelApply() {
    selectedColor.map((color) => {
      if (!urlColors.includes(color)) searchParams.append("color", color);
    });
    urlColors.map((color) => {
      if (!selectedColor.includes(color)) {
        searchParams.delete("color", color);
      }
    });
    selectedSize.map((size) => {
      if (!urlSize.includes(size)) searchParams.append("size", size);
    });
    urlSize.map((size) => {
      if (!selectedColor.includes(size)) {
        searchParams.delete("size", size);
      }
    });
    searchParams.set("minPrice", minVal);
    setSearchParams(searchParams);
    searchParams.set("maxPrice", maxVal);
    setSearchParams(searchParams);
    searchParams.set("category", selectedCategory);
    setSearchParams(searchParams);
  }
  return (
    <div
      className={` container space-y-10 w-full my-5
      `}
    >
      <div className={`space-y-4 mb-20 w-full`}>
        <span>Price Range</span>
        <div className="flex items center justify-between">
          <span>${minVal}</span>
          <span>${maxVal}</span>
        </div>
        <PriceRange
          min={0}
          max={10000}
          minVal={minVal}
          setMinVal={setMinVal}
          maxVal={maxVal}
          setMaxVal={setMaxVal}
          step={100}
        />
      </div>
      <div className=" space-y-4">
        <span>Colors</span>
        <Colors
          searchParams={searchParams}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      <div className="space-y-4">
        <span>Sizes</span>
        <Sizes
          searchParams={searchParams}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </div>
      <div className="space-y-4">
        <span>Category</span>
        <CategoyFilter
          searchParams={searchParams}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className={`flex justify-around `}>
        <Button
          style="outline"
          size="small"
          onClick={() => {
            searchParams.delete("color");
            searchParams.delete("size");
            searchParams.delete("category");
            setSearchParams(searchParams);
            setSelectedColor("");
            setSelectedSize("");
          }}
        >
          Discard
        </Button>
        <Button size="small" onClick={handelApply}>
          Apply
        </Button>
      </div>
    </div>
  );
}
function Colors({ selectedColor: selected, setSelectedColor: setSelected }) {
  function handleColors(color) {
    if (selected?.includes(color)) {
      setSelected((selected) => selected.filter((value) => value !== color));
    } else {
      setSelected((selected) => [...selected, color]);
    }
  }
  return (
    <ul className="flex items-center flex-wrap gap-5">
      {colors.map((color) => (
        <li
          key={Math.random()}
          className={`h-10 aspect-square ${
            color.bg
          } rounded-full outline-none cursor-pointer box-content border-2 border-text  ${
            selected?.includes(color.name)
              ? `border-2 border-primary-color `
              : ""
          }`}
          aria-placeholder={color.name}
          onClick={() => handleColors(color.name)}
        ></li>
      ))}
    </ul>
  );
}
function Sizes({ selectedSize: selected, setSelectedSize: setSelected }) {
  function handleSize(size) {
    if (selected.includes(size)) {
      setSelected((selected) => selected.filter((value) => value !== size));
    } else {
      setSelected((selected) => [...selected, size]);
    }
  }
  return (
    <ul className="flex items-center gap-8 flex-wrap text-xl font-semibold">
      {sizes.map((size, i) => (
        <li
          key={i}
          className={` flex justify-center items-center content-center rounded-lg border cursor-pointer border-text w-12 h-12 ${
            selected?.includes(size)
              ? "border-0 bg-primary-color text-primary-background"
              : ""
          } `}
          onClick={() => handleSize(size)}
        >
          {size}
        </li>
      ))}
    </ul>
  );
}
function CategoyFilter({ setSelectedCategory, selectedCategory }) {
  return (
    <ul className="flex gap-5 flex-wrap text-xsmall font-semibold">
      {categories.map((category, i) => (
        <li
          key={i}
          className={`min-w-[60px] h-[40px] flex justify-center items-center content-center rounded-lg cursor-pointer border border-text capitalize ${
            selectedCategory == category
              ? "border-0 bg-primary-color text-primary-background "
              : ""
          }`}
          onClick={() => {
            setSelectedCategory(category);
          }}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
