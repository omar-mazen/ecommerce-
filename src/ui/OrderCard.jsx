import { Link } from "react-router-dom";
import Button from "./Button";

export default function OrderCard({ status }) {
  return (
    <li className="bg-secondary-background p-4 sm:px-10 sm:py-8 rounded-xl w-full">
      <div className="flex flex-row justify-between items-center mb-4">
        <span className="text-medium">Order {"N1947034"}</span>
        <span className="text-small text-gray">{"05-12-2019"}</span>
      </div>
      <div className="text-small space-x-2 mb-2">
        <span className=" text-gray ">Tracking number:</span>{" "}
        <span>{"IW3475453455"}</span>
      </div>
      <ul className="my-5 sm:my-8 flex flex-col gap-7 max-w-[500px] mx-auto">
        <li className=" h-32 sm:h-40 md:h-44 flex flex-row w-full items-center rounded-xl overflow-hidden bg-primary-background">
          <img
            src="../src/images.jpeg"
            alt={`${"name"} category image`}
            className="h-full aspect-square object-center object-cover "
          />
          <div className="flex flex-1 flex-col px-4 sm:px-6 py-2 sm:py-4 text-xsmall h-full justify-between">
            <span className="text-small">{"Pullover"}</span>
            <span className=" text-gray">{"Mango"}</span>
            <div className="flex flex-row items-center space-x-5 my-1">
              <div className=" space-x-2">
                <span className=" text-gray">Color:</span>
                <span>{"Gray"}</span>
              </div>
              <div className=" space-x-2">
                <span className=" text-gray">Size:</span>
                <span>{"L"}</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className=" space-x-2">
                <span className=" text-gray">Units:</span>
                <span>{1}</span>
              </div>
              <span className=" text-small">{"51$"}</span>
            </div>
          </div>
        </li>
        <li className=" h-32 sm:h-40 md:h-44 flex flex-row w-full items-center rounded-xl overflow-hidden bg-primary-background">
          <img
            src="../src/images.jpeg"
            alt={`${"name"} category image`}
            className="h-full aspect-square object-center object-cover "
          />
          <div className="flex flex-1 flex-col px-4 sm:px-6 py-2 sm:py-4 text-xsmall h-full justify-between">
            <span className="text-small">{"Pullover"}</span>
            <span className=" text-gray">{"Mango"}</span>
            <div className="flex flex-row items-center space-x-5 my-1">
              <div className=" space-x-2">
                <span className=" text-gray">Color:</span>
                <span>{"Gray"}</span>
              </div>
              <div className=" space-x-2">
                <span className=" text-gray">Size:</span>
                <span>{"L"}</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className=" space-x-2">
                <span className=" text-gray">Units:</span>
                <span>{1}</span>
              </div>
              <span className=" text-small">{"51$"}</span>
            </div>
          </div>
        </li>
      </ul>
      <div className="text-small flex flex-row justify-between  items-center mb-4">
        <div>
          <span className=" text-gray ">Quantity: </span>
          <span>{3}</span>
        </div>
        <div>
          <span className="text-gray">Total amount: </span>
          <span>{"112$"}</span>
        </div>
      </div>
      <div className="text-small flex flex-row justify-between  items-center">
        <Button style="outline">
          <Link to="/profile/order">Details</Link>
        </Button>
        <span
          className={`text-small capitalize ${
            status.toLowerCase() == "delivered"
              ? "text-success-color"
              : status.toLowerCase() == "cancelled"
              ? "text-warning-color"
              : "text-text"
          }`}
        >
          {status}
        </span>
      </div>
    </li>
  );
}
