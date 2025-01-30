import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import toast from "react-hot-toast";

export default function PromoCodeCard({ img, buttonType }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const promoCode = "mypromocode2020";
  return (
    <li className="w-full h-28 flex flex-row bg-secondary-background relative rounded-xl ">
      <figure className=" overflow-hidden rounded-s-xl h-full aspect-square relative text-white">
        <div
          className={` absolute top-0 left-0 h-full w-full flex items-center justify-center ${
            img ? "bg-[rgb(0,0,0,0.5)]" : "bg-warning-color"
          } `}
        >
          <span className=" text-5xl font-bold">10</span>
          <div className=" flex flex-col text-lg font-semibold">
            <span>%</span>
            <span>off</span>
          </div>
        </div>
        {img ? (
          <img
            src={img}
            className=" aspect-square object-center object-cover"
          />
        ) : (
          ""
        )}
      </figure>
      <div className="flex justify-between p-4 flex-1">
        <div className="flex flex-col justify-between">
          <span className=" text-small font-medium">Personal offer</span>
          <span className="text-gray  font-light text-xsmall">{promoCode}</span>
        </div>
        <div className="flex flex-col justify-between items-end w-fit">
          <span className=" text-xsmall text-gray">6 days remaining</span>
          {buttonType == "copy" ? (
            <Button
              size="small"
              onClick={() => {
                navigator.clipboard
                  .writeText(promoCode)
                  .then(
                    toast.success(" Promo code copied successfully!"),
                    (error) => toast.error("Promo code not copied")
                  );
              }}
              type="small"
            >
              Copy
            </Button>
          ) : (
            <Button
              size="small"
              onClick={() => {
                searchParams.set("promoCode", promoCode);
                setSearchParams(searchParams);
              }}
              type="small"
            >
              Apply
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
