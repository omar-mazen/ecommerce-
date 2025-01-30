import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Gallery from "../../../ui/Gallery";
import Button from "../../../ui/Button";
import Section from "../../../ui/Section";
import BottomSheetModal from "../../../ui/BottomSheetModal";
import FavoriteIcon from "../../../ui/FavoriteIcon";
import StaticRatingStars from "../../../ui/StaticRatingStars";
import useMobileScreen from "../../../Hooks/useMobileScreen";

export default function ProductContent({ modal = false }) {
  // FIXME replace with select option from GP
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [color, setColor] = useState(
    searchParams.get("color") || colors[0].color
  );
  const [size, setSize] = useState(searchParams.get("size") || sizes[0].size);
  const isMobile = useMobileScreen();
  const images = colors.filter((clothesColor) => clothesColor.color == color)[0]
    .images;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr,minmax(200px,400px)] gap-x-5">
        <Gallery images={images} />
        <div className="px-4 space-y-8 w-full">
          <ProductOptionsSmallScreen
            openColorModal={() => setIsColorOpen(true)}
            openSizeModal={() => setIsSizeOpen(true)}
            color={color}
          />

          <div className=" space-y-6 border-b border-secondary-background pb-10">
            <ProductDetails />
            <Button size="block">ADD TO CART</Button>
          </div>
        </div>
      </div>
      <div className="container">
        <Section
          data={{
            title: "You can also like this",
            clothes,
          }}
        />
      </div>
      {isMobile && (
        <>
          {/* color modal */}
          <BottomSheetModal
            header={"Color"}
            isOpen={isColorOpen}
            onClose={() => setIsColorOpen(false)}
          >
            <ul className="my-10">
              {colors.map((clothesColor, i) => (
                <li
                  key={i}
                  className={`  p-4 text-2xl cursor-pointer ${
                    color == clothesColor.color
                      ? "dark:bg-primary-dark bg-primary-light text-background-light dark:text-background-dark "
                      : ""
                  }`}
                  onClick={() => {
                    setColor(clothesColor.color);
                    if (modal == true) return;
                    searchParams.set("color", clothesColor.color);
                    setSearchParams(searchParams);
                  }}
                >
                  {clothesColor.color}
                </li>
              ))}
            </ul>
          </BottomSheetModal>
          {/* size modal */}
          <BottomSheetModal
            header={"Size"}
            isOpen={isSizeOpen}
            onClose={() => setIsSizeOpen(false)}
          >
            <ul className="my-10">
              {sizes.map(
                (clothesSize, i) =>
                  clothesSize.available && (
                    <li
                      aria-disabled={clothesSize.available}
                      key={i}
                      className={`  p-4 text-2xl cursor-pointer ${
                        size == clothesSize.size
                          ? "dark:bg-primary-dark bg-primary-light text-background-light dark:text-background-dark "
                          : ""
                      }${
                        clothesSize.available
                          ? ""
                          : " cursor-not-allowed opacity-50"
                      }`}
                      onClick={() => {
                        setSize(clothesSize.size);
                        if (modal == true) return;
                        searchParams.set("size", clothesSize.size);
                        setSearchParams(searchParams);
                      }}
                    >
                      {clothesSize.size}
                    </li>
                  )
              )}
            </ul>
          </BottomSheetModal>
        </>
      )}
    </>
  );
}
function ProductOptionsSmallScreen({
  color,
  openColorModal,
  openSizeModal,
  searchParams,
}) {
  return (
    <div className=" flex justify-between">
      <div
        className="flex items-center justify-between border border-gray rounded-xl w-48 px-4 py-1 cursor-pointer"
        onClick={openColorModal}
      >
        <span className=" text-2xl">{color}</span>
        <span className="">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="15px"
            width="15px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div
        className="flex items-center justify-between border border-gray rounded-xl w-48 px-4 py-1 cursor-pointer"
        onClick={openSizeModal}
      >
        <span className=" text-2xl">Size</span>
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="15px"
            width="15px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <FavoriteIcon />
    </div>
  );
}
function ProductDetails() {
  return (
    <>
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <p className=" text-4xl font-bold">{brand}</p>
          <p className=" text-gray text-xl">
            {name}
            {colors[0].color}
          </p>
          <Link to={`reviews`}>
            <div className="flex items-center gap-1 mt-2 cursor-pointer">
              <StaticRatingStars ratingPercentage={reviewsPercentage} />
              <span className="text-xl text-gray">{`(${reviewsCount})`}</span>
            </div>
          </Link>
        </div>
        <span className="text-4xl font-bold">${price.toFixed(2)}</span>
      </div>
      <p className=" text-xl">{description}</p>
    </>
  );
}
let clothes = [
  {
    title: "Casual T-Shirt",
    price: 19.99,
    rating: {
      count: 120,
      percentage: 0.55,
    },
    brand: "FashionHub",
    sale: 15.0, // Sale value (if any)
    image: "../src/images.jpeg",
  },
  {
    title: "Denim Jeans",
    price: 49.99,
    rating: {
      count: 80,
      percentage: 0.62,
    },
    brand: "StyleMasters",
    sale: null, // No sale for this item
    image: "../src/images.jpeg",
  },
  {
    title: "Classic Suit",
    price: 149.99,
    rating: { count: 45, percentage: 0.78 },
    brand: "EleganceWear",
    sale: 30.0, // Sale value (if any)
    image: "../src/images.jpeg",
  },
  {
    title: "Casual T-Shirt",
    price: 19.99,
    rating: {
      count: 120,
      percentage: 0.45,
    },
    brand: "FashionHub",
    sale: 15.0, // Sale value (if any)
    image: "../src/images.jpeg",
  },
  {
    title: "Denim Jeans",
    price: 49.99,
    rating: {
      count: 80,
      percentage: 0.92,
    },
    brand: "StyleMasters",
    sale: null, // No sale for this item
    image: "../src/images.jpeg",
  },
  {
    title: "Classic Suit",
    price: 149.99,
    rating: { count: 45, percentage: 0.78 },
    brand: "EleganceWear",
    sale: 30.0, // Sale value (if any)
    image: "../src/images.jpeg",
  },
  {
    title: "Casual T-Shirt",
    price: 19.99,
    rating: {
      count: 120,
      percentage: 0.85,
    },
    brand: "FashionHub",
    sale: 15.0, // Sale value (if any)
    image: "../src/images.jpeg",
  },
  {
    title: "Denim Jeans",
    price: 49.99,
    rating: {
      count: 80,
      percentage: 0.92,
    },
    brand: "StyleMasters",
    sale: null, // No sale for this item
    image: "../src/images.jpeg",
  },
  {
    title: "Classic Suit",
    price: 149.99,
    rating: { count: 45, percentage: 0.78 },
    brand: "EleganceWear",
    sale: 30.0, // Sale value (if any)
    image: "../src/images.jpeg",
  },
  {
    title: "Casual T-Shirt",
    price: 19.99,
    rating: {
      count: 120,
      percentage: 0.85,
    },
    brand: "FashionHub",
    sale: 15.0, // Sale value (if any)
    image: "../src/images.jpeg",
  },
  {
    title: "Denim Jeans",
    price: 49.99,
    rating: {
      count: 80,
      percentage: 0.92,
    },
    brand: "StyleMasters",
    sale: null, // No sale for this item
    image: "../src/images.jpeg",
  },
  {
    title: "Classic Suit",
    price: 149.99,
    rating: { count: 45, percentage: 0.78 },
    brand: "EleganceWear",
    sale: 30.0, // Sale value (if any)
    image: "../src/images.jpeg",
  },
  {
    title: "Casual T-Shirt",
    price: 19.99,
    rating: {
      count: 120,
      percentage: 0.85,
    },
    brand: "FashionHub",
    sale: 15.0, // Sale value (if any)
    image: "..//../src/images.jpeg",
  },
  {
    title: "Denim Jeans",
    price: 49.99,
    rating: {
      count: 80,
      percentage: 0.92,
    },
    brand: "StyleMasters",
    sale: null, // No sale for this item
    image: "../src/images.jpeg",
  },
  {
    title: "Classic Suit",
    price: 149.99,
    rating: { count: 45, percentage: 0.78 },
    brand: "EleganceWear",
    sale: 30.0, // Sale value (if any)
    image: "../src/images.jpeg",
  },
  {
    title: "Casual T-Shirt",
    price: 19.99,
    rating: {
      count: 120,
      percentage: 0.85,
    },
    brand: "FashionHub",
    sale: 15.0, // Sale value (if any)
    image: "../src/images.jpeg",
  },
  {
    title: "Denim Jeans",
    price: 49.99,
    rating: {
      count: 80,
      percentage: 0.92,
    },
    brand: "StyleMasters",
    sale: null, // No sale for this item
    image: "../src/images.jpeg",
  },
  {
    title: "Classic Suit",
    price: 149.99,
    rating: { count: 45, percentage: 0.78 },
    brand: "EleganceWear",
    sale: 30.0, // Sale value (if any)
    image: "../src/images.jpeg",
  },
];
let sizes = [
  { size: "XS", available: true },
  { size: "S", available: false },
  { size: "M", available: true },
  { size: "L", available: true },
  { size: "XL", available: true },
];
let colors = [
  {
    color: "white",
    images: [
      "/products/white/1.png",
      "/products/white/2.png",
      "/products/white/3.png",
      "/products/white/4.png",
      "/products/white/5.png",
      "/products/white/6.png",
    ],
  },
  {
    color: "black",
    images: [
      "/products/black/1.png",
      "/products/black/2.png",
      "/products/black/3.png",
      "/products/black/4.png",
      "/products/black/5.png",
      "/products/black/6.png",
    ],
  },
  {
    color: "orange",
    images: [
      "/products/orange/1.png",
      "/products/orange/2.png",
      "/products/orange/3.png",
      "/products/orange/4.png",
      "/products/orange/5.png",
      "/products/orange/6.png",
    ],
  },
];
let brand = "H&M";
let name = "Short black dress";
let reviewsCount = 10;
let reviewsPercentage = 0.57;
let price = 19.99;
let description =
  "Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.";
