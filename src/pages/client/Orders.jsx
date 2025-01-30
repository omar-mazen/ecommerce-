import { useSearchParams } from "react-router-dom";
import Header from "../../ui/Header";
import OrderCard from "../../ui/OrderCard";
const status = ["Delivered", "Processing", "Cancelled"];
export default function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlStatus = searchParams.get("status") || status[0];
  return (
    <>
      <Header>Orders</Header>
      <div className=" container">
        <ul className=" flex flex-row items justify-between items-center text-small my-6  ">
          {status.map((status, i) => (
            <li
              key={i}
              className={`${
                urlStatus == status
                  ? "bg-text text-primary-background"
                  : "text-text"
              } px-4 py-1 rounded-full cursor-pointer`}
              onClick={() => {
                searchParams.set("status", status);
                setSearchParams(searchParams);
              }}
            >
              {status}
            </li>
          ))}
        </ul>
        <ul className=" flex flex-col items-center gap-6">
          {Array.from({ length: 20 }, (_, i) => (
            <OrderCard key={i} status={urlStatus} />
          ))}
        </ul>
      </div>
    </>
  );
}
