import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import Header from "../../ui/Header";
const COUPON_STATUS = [
  "all",
  "expiring soon",
  "new",
  "shipping coupon",
  "discount coupon",
];
export default function PromoCodes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const statusURL = searchParams.get("status") || "all";
  return (
    <>
      <Header>Promo codes</Header>
      <div className="container text-2xl">
        <ul className="flex flex-row justify-evenly gap-5">
          <li className="px-4 py-2 relative ">
            <NavLink
              className={`text-gray aria-[current="page"]:text-text aria-[current="page"]:after:absolute aria-[current="page"]:after:bottom-0 aria-[current="page"]:after:left-0 aria-[current="page"]:after:w-full aria-[current="page"]:after:h-[3px] aria-[current="page"]:after:bg-primary-color`}
              to={"unused"}
            >
              Unused
            </NavLink>
          </li>
          <li className="px-4 py-2 relative ">
            <NavLink
              className={`text-gray aria-[current="page"]:text-text aria-[current="page"]:after:absolute aria-[current="page"]:after:bottom-0 aria-[current="page"]:after:left-0 aria-[current="page"]:after:w-full aria-[current="page"]:after:h-[3px] aria-[current="page"]:after:bg-primary-color`}
              to={"expired"}
            >
              Expired
            </NavLink>
          </li>
        </ul>
        <ul className=" mt-5 mb-10 h-full flex flex-row items-center gap-3 whitespace-nowrap overflow-y-auto">
          {COUPON_STATUS.map((status, i) => (
            <li
              key={i}
              className={`py-1 px-6 border border-text rounded-full cursor-pointer ${
                statusURL == status ? "bg-text text-primary-background" : ""
              }`}
              onClick={() => {
                searchParams.set("status", status);
                setSearchParams(searchParams);
              }}
            >
              {status}
            </li>
          ))}
        </ul>
      </div>
      <section className="container">
        <Outlet />
      </section>
    </>
  );
}
