import { Link, NavLink, useLocation } from "react-router-dom";
import useMobileScreen from "../Hooks/useMobileScreen";
import Search from "./Search";
import { useTheme } from "../context/Theme";
import { useState } from "react";
import useClickOutside from "../Hooks/useClickOutside";

const categories = [
  {
    name: "women",
    subcategories: [
      {
        name: "new in",
        subcategories: ["blouse", "other tops", "slippers", "sneakers"],
      },
      {
        name: "sale",
        subcategories: ["blazers", "suit sets", "T-shirt", "Tank tops"],
      },
      {
        name: "tops",
        subcategories: ["T-shirt", "Tank tops", "blouse", "other tops"],
      },
      {
        name: "bottoms",
        subcategories: [
          "Pants",
          "Skirt",
          "jeans",
          "shorts",
          "sweet pants",
          "other bottoms",
        ],
      },
      { name: "shoes", subcategories: ["Flats", "slippers", "sneakers"] },
      {
        name: "dresses",
        subcategories: [
          "mini & shorts dresses",
          "midi dresses",
          "boho dresses",
          "casual dresses",
          "other tops",
        ],
      },
      { name: "suits", subcategories: ["blazers", "suit sets", "suit pants"] },
    ],
  },
  {
    name: "men",
    subcategories: [
      {
        name: "new in",
        subcategories: ["blouse", "other tops", "slippers", "sneakers"],
      },
      {
        name: "sale",
        subcategories: ["blazers", "suit sets", "T-shirt", "Tank tops"],
      },
      {
        name: "tops",
        subcategories: [
          "T-shirt",
          "shirt",
          "Tank tops",
          "polo shirts",
          "other tops",
        ],
      },
      {
        name: "bottoms",
        subcategories: [
          "Pants",
          "jeans",
          "shorts",
          "sweet pants",
          "other bottoms",
        ],
      },
      { name: "shoes", subcategories: ["Flats", "slippers", "sneakers"] },
      {
        name: "suits",
        subcategories: ["suits", "suit pants", "blazers", "waistcoats"],
      },
    ],
  },
  {
    name: "kids",
    subcategories: [
      {
        name: "new in",
        subcategories: ["blouse", "other tops", "slippers", "sneakers"],
      },
      {
        name: "sale",
        subcategories: ["blazers", "suit sets", "T-shirt", "Tank tops"],
      },
      {
        name: "tops",
        subcategories: [
          "T-shirt",
          "shirt",
          "Tank tops",
          "polo shirts",
          "other tops",
        ],
      },
      { name: "shoes", subcategories: ["Flats", "slippers", "sneakers"] },
      {
        name: "dresses",
        subcategories: [
          "mini & shorts dresses",
          "midi dresses",
          "boho dresses",
          "casual dresses",
          "other tops",
        ],
      },
    ],
  },
];

export default function NavBar() {
  const isMobile = useMobileScreen();
  return isMobile ? <SmallScreenNavBar /> : <LargeScreenNavBar />;
}

function SmallScreenNavBar() {
  return (
    <nav className="fixed bottom-0 w-full left-0 mt-[-2rem] h-24 overflow-hidden flex items-center bg-primary-background rounded-t-3xl z-10 ">
      <div className="flex justify-around w-[100%]">
        <Icon
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="25px"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
              ></path>
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
              ></path>
            </svg>
          }
          iconOnHover={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="25px"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z"></path>
            </svg>
          }
          to="home"
        >
          Home
        </Icon>
        <Icon
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="25px"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path>
            </svg>
          }
          iconOnHover={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="25px"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          }
          to="categories"
        >
          Category
        </Icon>
        <Icon
          icon={
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="25px"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              ></path>
            </svg>
          }
          iconOnHover={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="25px"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
            </svg>
          }
          to="cart"
        >
          Cart
        </Icon>
        <Icon
          icon={
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="25px"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              ></path>
            </svg>
          }
          iconOnHover={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="25px"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
            </svg>
          }
          to="favorites"
        >
          Favorites
        </Icon>
        <Icon
          icon={
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="25px"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              ></path>
            </svg>
          }
          iconOnHover={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="25px"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
          to="profile"
        >
          Profile
        </Icon>
      </div>
    </nav>
  );
}
function Icon({ icon, iconOnHover, children, to }) {
  const { pathname } = useLocation();
  const isActive = pathname.slice(1).includes(to);
  return (
    <>
      <NavLink
        className={`w-20 flex flex-col items-center sm:items-end ${
          isActive ? " text-primary-color " : ""
        }`}
        to={to}
      >
        <span>{isActive ? iconOnHover : icon}</span>
        <span className=" text-sm">{children}</span>
      </NavLink>
    </>
  );
}
function LargeScreenNavBar() {
  const { theme, themeToggle } = useTheme();
  // const mainCategories = categories.map((category) => category.name);
  // const subCategories = categories.map((category) => category.subcategories);
  // const nestedCategories = categories.map((category) =>
  //   category.subcategories.map((nestedCategory) => nestedCategory.subcategories)
  // );
  // console.log(mainCategories, subCategories, nestedCategories);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useClickOutside("mouseleave", () => {
    setIsMenuOpen(false);
    setSelectedCategory(0);
  });
  return (
    <>
      <nav className="sticky top-0 w-full left-0 h-[10.1rem] bg-primary-background flex flex-col items-center border-b border-text/5 drop-shadow-lg z-10">
        <div className="w-full">
          <div className=" h-24 flex items-center gap-20 sm:gap-12 md:gap-20 mx-4 sm:mx-16 md:mx-24 lg:mx-32">
            <Link to="/">
              <div className="w-40">
                {theme == "dark" ? (
                  <img src="/versace-word-white.svg" />
                ) : (
                  <img src="/versace-word-black.svg" />
                )}
              </div>
            </Link>
            <Search />
            <div className="flex">
              <Icon
                icon={
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="25px"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    ></path>
                  </svg>
                }
                iconOnHover={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="25px"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
                  </svg>
                }
                to="cart"
              />

              <Icon
                icon={
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="25px"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    ></path>
                  </svg>
                }
                iconOnHover={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="25px"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                  </svg>
                }
                to="favorites"
              />

              <Icon
                icon={
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="25px"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    ></path>
                  </svg>
                }
                iconOnHover={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="25px"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                }
                to="profile"
              />
              <span
                className="flex dark:hidden cursor-pointer w-20 justify-end"
                onClick={themeToggle}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span
                className="hidden dark:flex cursor-pointer w-20 justify-end"
                onClick={themeToggle}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full" ref={ref}>
          <div className="flex items-center w-full h-16 bg-primary-background select-none">
            <div className="flex mx-4 sm:mx-16 md:mx-24 lg:mx-32 capitalize h-full items-center">
              <span
                className=" flex justify-between items-center gap-2 cursor-pointer py-2 pr-4 "
                onMouseEnter={() => {
                  setIsMenuOpen(true);
                }}
              >
                <span>Categories</span>
                <span className={`${isMenuOpen ? "rotate-180" : ""}`}>
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
                      d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
              <div className="flex cursor-pointer items-center">
                {categories.map((category, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 text-center h-14 ${
                      isMenuOpen && selectedCategory == i
                        ? "border-b-2 border-primary-color"
                        : ""
                    }`}
                    onMouseEnter={() => {
                      setSelectedCategory(i);
                      setIsMenuOpen(true);
                    }}
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            {isMenuOpen && (
              <div className="fixed top-[10rem]  w-full select-none">
                <div className=" bg-primary-background py-8">
                  <div className=" mx-4 sm:mx-16 md:mx-24 lg:mx-32 grid grid-cols-[minmax(150px,1fr),minmax(17rem,3fr),4fr] grid-rows-[40rem] gap-x-10 overflow-hidden">
                    <div className="flex flex-col gap-5 overflow-y-scroll">
                      {categories.map((category, i) => (
                        <span
                          className={`cursor-pointer flex items-center justify-between px-4 py-2 ${
                            selectedCategory == i ? "bg-primary-color" : ""
                          }`}
                          key={i}
                          onMouseEnter={() => setSelectedCategory(i)}
                        >
                          <span className=" capitalize">{category.name}</span>
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
                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      ))}
                    </div>
                    <div className="space-y-5 overflow-y-scroll">
                      <span className=" font-semibold text-medium">
                        Shop by category
                      </span>
                      <div className="grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] grid-rows-[repeat(auto-fit,1fr)] gap-5 overflow-y-scroll h-fit text-small">
                        {categories[selectedCategory].subcategories.map(
                          (subcategories, i) => (
                            <Link
                              to={`categories/${categories[selectedCategory].name}/${subcategories.name}/`}
                              key={i}
                              className="flex flex-col items-center cursor-pointer"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <img
                                src="/src/images.jpeg"
                                className="h-28 w-28 rounded-full object-cover object-center"
                              />
                              <span className={``}>{subcategories.name}</span>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 h-full overflow-scroll text-small">
                      {categories[selectedCategory].subcategories.map(
                        (subCategories, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-5 flex-wrap"
                          >
                            <span className=" capitalize font-semibold text-medium">
                              {subCategories.name}
                            </span>
                            <div className="flex flex-wrap gap-5 ">
                              {subCategories.subcategories.map(
                                (nestedCategory, i) => (
                                  <Link
                                    onClick={() => setIsMenuOpen(false)}
                                    to={`categories/${categories[selectedCategory].name}/${subCategories.name}/style=${nestedCategory}`}
                                    key={i}
                                    className="flex flex-col items-center w-28 text-wrap text-center"
                                  >
                                    <img
                                      src="/src/images.jpeg"
                                      className="h-28 w-28 rounded-full object-cover object-center"
                                    />
                                    <span>{nestedCategory}</span>
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-36 w-full h-full bg-black/20 z-[9]"></div>
      )}
    </>
  );
}
